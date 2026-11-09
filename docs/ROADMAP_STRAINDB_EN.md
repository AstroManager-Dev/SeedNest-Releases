# SeedNest – European StrainDB, barcode scanning and supplier roadmap

**Language / Sprache:** [🇩🇪 Deutsch](ROADMAP_STRAINDB.md) | **🇬🇧 English**

**Status: In development — no public cloud catalog is available yet.** The existing private SeedNest collection remains independent and accessible offline.

## Goal

Build a comprehensive **licensed European strain database** using authorized data from seedbanks, breeders and catalog platforms. Users should be able to browse, compare and review strains, then **add a selected strain to their personal collection without automatically adding stock**.

## Planned features

- [ ] Verified strain and breeder records, preferably in German; original English data is welcome.
- [ ] Genetics and parent lines; feminized/regular, autoflower/photoperiod, Fast and F1 variants; Indica/Sativa/Ruderalis, THC/CBD, aromas, terpenes, flowering time, yield and sources.
- [ ] **EAN/GTIN/UPC barcode recognition** for seed packaging, with optional photo/OCR fallback for unknown codes. **Prepared on the development branch:** EAN-8/EAN-13, UPC-A and GTIN-14 lookup, including the **sales unit (seeds per pack)**.
- [ ] **Suppliers directly in each strain profile:** retailer name, product URL, pack size, variant, SKU/EAN, optional price/currency, availability and date checked.
- [ ] Support multiple barcodes, product variations and retailer offers per strain; allow users to add their own supplier links locally.
- [ ] Privacy-preserving cloud lookup and optional offline cache; private quantities, storage locations and inventory transactions remain local.
- [ ] Obtain **written permission** to store, cache, display, republish and translate descriptions and photographs, including data from third-party breeders.
- [ ] Data quality controls, provenance, license attribution, conflicting source data, duplicate checking, catalog updates and history.

## Planned search sequence

1. **Breeder first:** search for and select the breeder.
2. **Then strain:** show and filter strains belonging to that breeder.
3. **Alternatively scan an EAN/GTIN:** show the matching product variant, including **seeds per pack (sales unit)**, breeder, retailer and item number.
4. **Confirm strain import:** a sales unit is **not the user's actual inventory quantity**. Any owned seeds must be recorded separately.

## CloudBase connection

The private native Android source contains a **prepared read-only HTTPS catalog client** with user-confirmed strain import. A production CloudBase database, licensed dataset, live public API endpoint and fully tested barcode lookup service are **not yet available**.

The integration must not automatically upload private stock data or embed secret server keys inside the APK.

## More information

- [SeedNest Releases (English)](../README_EN.md)
- [SeedNest Releases (German)](../README.md)
- [User manual (German)](BENUTZERHANDBUCH.md)
- [Development pull request #9](https://github.com/AstroManager-Dev/SeedNest-Android/pull/9) (private source repository)
