# Introduction

## Jukugo 
Kanji in Japanese, when created from two individual Chinese characters, is often called "jukugo" (熟語). Jukugo are compound words where two or more kanji are combined together to form a new word with a specific meaning. For example, the word "学校" (gakkou), meaning school, is formed from two kanji: "学" (learn) and "校" (school). Jukugo are very common in Japanese and include many important and necessary vocabulary items.

## Single
Single Chinese characters in Japanese are called "kandokusha" (漢独者). This term refers to Kanji that by themselves already have an independent meaning and do not need to be combined with other Kanji. For example, the character "木" means tree and "水" means water. These Kanji often appear independently in texts or are used in simple compound words.

## Structure (ENGLISH)
This document provides the details about the data model used for storing Kanji characters in the application. It explains the structure and the type of each field in the Kanji model.

### Model Fields

| Field           | Type      | Description                                          |
|-----------------|-----------|------------------------------------------------------|
| `character`     | `string`  | The encoded Kanji character.                         |
| `meaning_EN`    | `string`  | The meaning of the Kanji in English.                 |
| `meaning_VI`    | `string`  | The meaning of the Kanji in Vietnamese.              |
| `kunyomi`       | `string[]`| The Japanese readings (Kunyomi) of the Kanji.        |
| `onyomi`        | `string[]`| The Chinese readings (Onyomi) of the Kanji.          |
| `sinoVietnamese`| `string`  | The Sino-Vietnamese reading of the Kanji.            |
| `level`         | `string`  | The proficiency level of the Kanji (e.g., N5, N4, N3, N2, N1). |
| `stroke`        | `number`  | The number of strokes to write the Kanji.            |

## Cấu trúc (Vietnamese)
Tài liệu này cung cấp các chi tiết về mô hình dữ liệu được sử dụng để lưu trữ các ký tự Kanji trong ứng dụng. Nó giải thích cấu trúc và loại của từng trường trong mô hình Kanji.

### Model Fields / Các Trường trong Mô hình

| Field / Trường  | Type / Loại  | Description / Mô tả                                                                 |
|-----------------|--------------|-------------------------------------------------------------------------------------|
| `character`     | `string`     | The encoded Kanji character. / Ký tự Kanji được mã hóa.                             |
| `meaning_EN`    | `string`     | The meaning of the Kanji in English. / Nghĩa của Kanji bằng tiếng Anh.              |
| `meaning_VI`    | `string`     | The meaning of the Kanji in Vietnamese. / Nghĩa của Kanji bằng tiếng Việt.          |
| `kunyomi`       | `string[]`   | The Japanese readings (Kunyomi) of the Kanji. / Cách đọc tiếng Nhật (Kunyomi).      |
| `onyomi`        | `string[]`   | The Chinese readings (Onyomi) of the Kanji. / Cách đọc Hán-Việt (Onyomi).           |
| `sinoVietnamese`| `string`     | The Sino-Vietnamese reading of the Kanji. / Cách đọc Sino-Việt của Kanji.           |
| `level`         | `string`     | The proficiency level of the Kanji (e.g., N5, N4, N3, N2, N1). / Trình độ của Kanji (ví dụ: N5, N4, N3, N2, N1). |
| `stroke`        | `number`     | The number of strokes to write the Kanji. / Số nét viết của Kanji.                  |
