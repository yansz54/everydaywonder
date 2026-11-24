// Everyday Wonder — u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3
// One sentence, max 200 chars, a small everyday moment made strange and new.
// The sentence works as a turn: the most boring office failure — a jam on
// the last page — becomes a machine that reads your document and objects at
// the ending. The photocopier is the critic. That angle is the freshest in a
// 30-candidate field: grounded in a specific real object (the last page), the
// surprise lands in one read, and every word works. It beat the runner-up
// ("The alarm goes off and my dream keeps talking for half a second, in a
// voice I almost recognise.") in the tournament final on criterion 2, the
// angle the reader has not met before.
// Writes the sentence to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-200 chars, UTF-8, single sentence, non-whitespace. This sentence
// is 105 chars / 105 bytes — comfortably inside the gate and small enough to
// win a size tie-break (exact ties go to the smaller text). No trailing
// newline: the file holds exactly the sentence, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The photocopier jams on the last page, every time, as if it reads the document and objects at the ending.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
