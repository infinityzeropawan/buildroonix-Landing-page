import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function atomicWriteJson(filePath, payload) {
  ensureDataDir();
  const tempFile = `${filePath}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(payload, null, 2), "utf8");
  fs.renameSync(tempFile, filePath);
}

export function readInquiries() {
  try {
    if (!fs.existsSync(INQUIRIES_FILE)) return [];
    const raw = fs.readFileSync(INQUIRIES_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Error reading inquiries DB:", err);
    return [];
  }
}

export function appendInquiry(entry) {
  const existing = readInquiries();
  const record = {
    id: `inq_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...entry,
  };
  existing.unshift(record);
  atomicWriteJson(INQUIRIES_FILE, existing);
  return record;
}
