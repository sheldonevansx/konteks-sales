#!/bin/bash
# ATP-style keyword research scraper using Google Autocomplete API
# Usage: ./keyword-scraper.sh "seed keyword" [output_file]
# Free, unlimited, no API key needed

SEED="${1:-architecture student}"
OUTPUT="${2:-/dev/stdout}"
TMPFILE=$(mktemp)

echo "# Keyword Research: \"$SEED\"" > "$TMPFILE"
echo "Generated: $(date '+%Y-%m-%d %H:%M')" >> "$TMPFILE"
echo "Source: Google Autocomplete API (free)" >> "$TMPFILE"
echo "" >> "$TMPFILE"

fetch_suggestions() {
  local query="$1"
  local encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$query'))")
  curl -s "https://suggestqueries.google.com/complete/search?client=firefox&q=${encoded}" | \
    python3 -c "import sys,json; [print(s) for s in json.load(sys.stdin)[1]]" 2>/dev/null
}

# === QUESTION WORDS ===
echo "## Questions" >> "$TMPFILE"
for prefix in "how to" "what is" "why do" "why is" "when to" "where to" "is it" "can you" "should i" "does"; do
  results=$(fetch_suggestions "${prefix} ${SEED}")
  if [ -n "$results" ]; then
    echo "" >> "$TMPFILE"
    echo "### ${prefix}..." >> "$TMPFILE"
    echo "$results" | while read -r line; do
      echo "- $line" >> "$TMPFILE"
    done
  fi
  sleep 0.2
done

# === ALPHABET EXPANSION ===
echo "" >> "$TMPFILE"
echo "## Alphabet Expansion" >> "$TMPFILE"
for letter in a b c d e f g h i j k l m n o p q r s t u v w x y z; do
  results=$(fetch_suggestions "${SEED} ${letter}")
  if [ -n "$results" ]; then
    echo "" >> "$TMPFILE"
    echo "### ${SEED} ${letter}..." >> "$TMPFILE"
    echo "$results" | while read -r line; do
      echo "- $line" >> "$TMPFILE"
    done
  fi
  sleep 0.2
done

# === PREPOSITIONS ===
echo "" >> "$TMPFILE"
echo "## Prepositions" >> "$TMPFILE"
for prep in "for" "with" "without" "vs" "or" "near" "in" "at" "from" "to" "like" "about"; do
  results=$(fetch_suggestions "${SEED} ${prep}")
  if [ -n "$results" ]; then
    echo "" >> "$TMPFILE"
    echo "### ${SEED} ${prep}..." >> "$TMPFILE"
    echo "$results" | while read -r line; do
      echo "- $line" >> "$TMPFILE"
    done
  fi
  sleep 0.2
done

# === COMPARISONS ===
echo "" >> "$TMPFILE"
echo "## Comparisons" >> "$TMPFILE"
for comp in "best" "top" "cheap" "free" "easy" "hard" "worst" "tips" "guide" "help" "course" "online" "reddit"; do
  results=$(fetch_suggestions "${SEED} ${comp}")
  if [ -n "$results" ]; then
    echo "" >> "$TMPFILE"
    echo "### ${SEED} ${comp}..." >> "$TMPFILE"
    echo "$results" | while read -r line; do
      echo "- $line" >> "$TMPFILE"
    done
  fi
  sleep 0.2
done

if [ "$OUTPUT" != "/dev/stdout" ]; then
  cp "$TMPFILE" "$OUTPUT"
  total=$(grep -c "^- " "$OUTPUT")
  echo "✅ Saved $total keywords to $OUTPUT"
else
  cat "$TMPFILE"
fi

rm "$TMPFILE"
