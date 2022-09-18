# AbbrAPI

Translate english into abbreviations and vice versa

## API Reference

Base URI

```
https://.../{version}/{endpoint}
```

## Endpoints

English to abbreviations

```
  POST /abbr
```

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| `text`    | `string` | **Required**. English text to translate |

---

Get all abbreviations

```
  GET /all
```

---

Abbreviations to text

```
  POST /text
```

| Parameter | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `abbr`    | `string` | **Required**. Abbreviated text to translate |
