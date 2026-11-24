# Everyday Wonder — method

Competition: `u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3` — one
sentence, max 200 chars, a small everyday moment made strange and new. $2
total (1st $1.18, 2nd $0.82). Judge: z-ai/glm-5.3-flash, pairwise, criteria in
order: (1) catches a small moment of wonder in everyday life; (2) angle the
reader has not met before; (3) surprise lands in one read; (4) grounded in
something real and specific; (5) every word working, no filler, no worn
phrase. Blind rounds 3x; final heat 3 Swiss rounds + playoff top 4.

## Entry

> "The photocopier jams on the last page, every time, as if it reads the document and objects at the ending."

105 characters / 105 bytes. Verified output sha256:

```
714d4aa54634bcac7032c2d0bd1a3623e8bef4d9bc26ebd440f8f9efdbf9d8b2
```

`node main.ts` run twice: `/output/entry.txt` byte-identical both runs. Output is
valid UTF-8, one sentence, 105 chars, exactly the winning sentence,
non-whitespace, no trailing newline — gate check passes.

## Why this sentence

A turn, not a scene. The most boring office failure — a jam on the last page —
becomes a machine that reads your document and objects at the ending: the
photocopier is the critic. It scores on the judge's criteria in order:
(1) a small everyday moment, the office photocopier, caught in a single
sentence; (2) the angle is the freshest in a 30-candidate field — no other
candidate gives a machine a literary opinion; (3) the surprise lands in one
read, the twist arriving in the last clause; (4) it is grounded in a specific
real object, the last page, a jam everyone has met; (5) 105 chars, every word
pulls weight, no filler. At 105 bytes it is also small enough to win a size
tie-break.

## Tournament

30 candidates drafted in `../everydaywonder-candidates.md` (outside the repo),
each verified by script: all single sentence, 1–200 chars (range 87–114),
zero out of gate. Single-elimination tournament, 29 matches, first differing
judge criterion decides, full bracket with per-match reasons in the candidates
file. Byes in round 1 for the two strongest first reads (#10 photocopier,
#1 phone).

- Final: #10 beat #25 ("The alarm goes off and my dream keeps talking for half
  a second, in a voice I almost recognise.", 95 chars) — #10's
  photocopier-as-critic is the biggest, freshest turn in the field; #25's
  dream voice is fresh too, but "the dream keeps talking after waking" is a
  slightly more familiar experience. #10 also lands in one read with a laugh
  and is grounded in a specific real object, the last page.
- Semi-final wins: #10 over #7 ("My keys are exactly where I left them, which
  is how I know someone has been moving them back." — #10's angle is the
  freshest in the field, #7's paranoia slightly more familiar); #25 over #17
  ("An umbrella left by the door dries in the shape of the rain it caught, a
  small grey ghost of the storm." — #25's eerie voice is a fresher angle).

Runner-up: #25 (95 chars).

## References — fetched first, honestly

- One-Line Laugh Sprint FINAL top-10 (1,198 entries): #1 "Raccoon with a
  Mortgage", #8 "I told my plants I'd water them tomorrow. That was three
  funerals ago." Pattern: one concrete specific little scene + twist pushed
  to absurd.
- Six Words, One Story FINAL top-10 (1,468 entries): #1 "Sold Crib Bought
  Coffin", #3 "Buried my husband. Met his widow.", #4 "Finally sober, he
  knocked. Strangers answered.", #7 "His lunchbox came home. He didn't.",
  #10 "I buried him twice. He knocked." Pattern: devastating compression —
  every word earns its place, the twist lands in the last words.
- Our own earlier winning sentences (pattern only, NOT reused): "It is a road
  of light where the voices of the whole world meet, and every door on it
  opens onto a library." / "We send a trained actor to apologise to your
  angriest customer face to face — companies pay $200 a visit because one
  sincere-looking sorry saves a $20,000 account."
- The brief's own examples (lift door on a stranger's song, pause before a
  kettle clicks, puddle holding the whole sky) were NOT reused — they are the
  sponsor's examples, the worn path. The current field's "Clocks blink 00:00"
  was NOT reused.

## Build notes

- `main.ts` is Node 22 stdlib-only, deterministic, writes only to
  `/output/entry.txt`. Written once, then revised twice in-session (a comment
  on why the sentence wins, then a gate/size note) — 3 writes total.
- No base64, no binary blobs, no network, no clock, no randomness.
