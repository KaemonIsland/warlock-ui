# Sizing 📐

## Usage

Sizing is used to define the sizes of fonts, padding, margins etc.

It's a predefined system that is a part of the theme that can be accessed from themeProvider. It is also exported as formatSize globally.

There are 16 sizes in all. 1 being the smallest and 16 being the largest.

### formatSize

The primary way to use the sizing system is with formatSize. It accepts two params, 'size' and 'unit'.

| Param | Default Value | Required? | Description                                                       |
| ----- | ------------- | --------- | ----------------------------------------------------------------- |
| size  | 4             | Yes       | Must be between 1-16, returns the size from the sizeSystem        |
| unit  | 'rem'         | no        | Specifies unit of measurement. Other options are 'px', 'em', etc. |

## Size System

1. (16 \* 0.25) = 4px
2. (16 \* 0.5) = 8px
3. (16 \* 0.75) = 12px
4. (16 \* 1) = 16px
5. (16 \* 1.5) = 24px
6. (16 \* 2) = 32px
7. (16 \* 3) = 48px
8. (16 \* 4) = 64px
9. (16 \* 6) = 96px
10. (16 \* 8) = 128px
11. (16 \* 12) = 192px
12. (16 \* 16) = 256px
13. (16 \* 24) = 384px
14. (16 \* 32) = 512px
15. (16 \* 40) = 640px
16. (16 \* 48) = 768px
