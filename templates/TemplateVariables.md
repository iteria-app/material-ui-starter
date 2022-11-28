# Template variables
## automatic pre-fill rules

It's based on field IDs:
```ts
 "components": [
    {
      "name": "Other",
      "fields": [
        {
          "id": "other",// <--- this
          "name": "Fields",
```

- `thumbnail`: looks for signed urls `GetUrlReturn` type and optionally with more priority via this regex `/signed.*Thumbnail.*$/i` 
or alternatively these regexes `/signed.*Thumbnail.*$/i, /signed.*LogoPath$/i, /logo_path$/i, /signed.*ImgPath$/i, /url$/i`
- `name`: looks for strings via these regexes `/.*name/i, /.*title/i`
- `geoJson`: looks for fields with `geography` type
- `start`: looks for date fields and optionally with higher priority some which name also includes 'start'
- `end`: looks for date fields and optionally with higher priority some which name also includes 'end'
- `x-axis/y-axis`: looks for fields of those types `'numeric', 'Int', 'bigint', 'numeric', 'date', 'time', 'timetz', 'timestamp', 'timestamptz'`
- `description`: looks for strings, excluding those that match regexes `/id$/, /.*Id$/, /.*Path$/, /updated_at$/i, /updatedAt$/i, /created_at$/i, /createdAt$/i, /is_deleted$/i, /isDeleted$/i, /signed.*Thumbnail.*$/i, /signed.*LogoPath$/i, /logo_path$/i, /signed.*ImgPath$/i, /url$/i`
- `other`: looks for all `SCALAR` type fields, excluding those that match regexes `/id$/, /.*Id$/, /.*Path$/, /updated_at$/i, /updatedAt$/i, /created_at$/i, /createdAt$/i, /is_deleted$/i, /isDeleted$/i, /signed.*Thumbnail.*$/i, /signed.*LogoPath$/i, /logo_path$/i, /signed.*ImgPath$/i, /url$/i`

Logic is in this file: `packages/wysiwyg/src/lib/utils/templateVariables.ts`