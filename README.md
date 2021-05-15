# Encoded Typer

Train your fluency in decoding various types of encodings:
 - ROT 13
 - Number (1-26)
 - Pigpen cipher
 - Braille
 - Semaphore

# Motivation
This project came about when I started participating in online puzzle hunts. The puzzles found in these puzzles often require decoding text encrypted in various ways, and some of these encodings show up frequently. Rather than rely on a table to look up the encoded characters one by one, I decided to challenge my self to learn to read encoded text just as easily as I could read English.

I realized that I could model a training app after those typically used to evaluate typing speed and accuracy. Users would be presented with  randomly-generated text encoded in a selected format and and would need to type the decoded (plain text) version as quickly as possible.

# Usage
Specify the length and contents of the ciphertext and begin typing. When you have correctly typed all the characters, your typing speed* in words per minute (WPM) will be displayed at the bottom.

\* This should be an approximation of your decoding speed (assuming that your normal typing speed is faster than your decoding, and that you are typing as quickly as you can decode).

# Tech/Framework Used

* ES6 JavaScript
* HTML 5
* CSS 3

# Roadmap

Future releases may include the following:
* Built-in lesson progression from a limited character set to all 26 letters.
  - Rationale: Learning takes place after repetition and reinforcement. Users should start learning from a small set of characters and gradually add more characters and rather than try to learn all 26 at once.
* Custom text input
  - Rationale: Learning is more efficient and effective when the user is able to work with meaningful source material.