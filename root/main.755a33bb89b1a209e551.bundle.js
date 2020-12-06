;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    11: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Text.a
      })
      var Text = __webpack_require__(113)
    },
    113: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Text
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          85
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          43
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        TextContainer = __webpack_require__(1).d.p.withConfig({
          displayName: 'Text__TextContainer',
          componentId: 'eymvd6-0',
        })(function(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            isBold = _ref.isBold,
            isItalics = _ref.isItalics,
            align = _ref.align,
            isUpcase = _ref.isUpcase,
            display = _ref.display,
            color = _ref.color,
            shade = _ref.shade,
            family = _ref.family,
            _ref$weight = _ref.weight,
            weight = void 0 === _ref$weight ? 400 : _ref$weight,
            lineHeight = _ref.lineHeight,
            spacing = _ref.spacing,
            ellipse = _ref.ellipse
          return Object(
            _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a
          )(
            {
              fontFamily: ''.concat(family, ', sans-serif'),
              lineHeight: lineHeight,
              letterSpacing: spacing,
              fontSize: ''.concat(theme.fontSizes[size], 'rem'),
              fontWeight: isBold ? 'bold' : weight,
              fontStyle: isItalics ? 'italic' : 'normal',
              textAlign: align,
              textTransform: isUpcase && 'uppercase',
              display: display,
              color: 'black' !== color ? theme.color[color][shade] : 'black',
              width: '100%',
            },
            ellipse && {
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }
          )
        }),
        Text = function Text(_ref2) {
          var _ref2$size = _ref2.size,
            size = void 0 === _ref2$size ? 3 : _ref2$size,
            _ref2$isBold = _ref2.isBold,
            isBold = void 0 !== _ref2$isBold && _ref2$isBold,
            _ref2$isItalics = _ref2.isItalics,
            isItalics = void 0 !== _ref2$isItalics && _ref2$isItalics,
            _ref2$align = _ref2.align,
            align = void 0 === _ref2$align ? 'left' : _ref2$align,
            _ref2$isUpcase = _ref2.isUpcase,
            isUpcase = void 0 !== _ref2$isUpcase && _ref2$isUpcase,
            _ref2$display = _ref2.display,
            display = void 0 === _ref2$display ? 'block' : _ref2$display,
            _ref2$color = _ref2.color,
            color = void 0 === _ref2$color ? 'black' : _ref2$color,
            _ref2$shade = _ref2.shade,
            shade = void 0 === _ref2$shade ? 1 : _ref2$shade,
            family = _ref2.family,
            weight = _ref2.weight,
            lineHeight = _ref2.lineHeight,
            spacing = _ref2.spacing,
            children = _ref2.children,
            _ref2$ellipse = _ref2.ellipse,
            ellipse = void 0 !== _ref2$ellipse && _ref2$ellipse,
            rest = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a
            )(_ref2, [
              'size',
              'isBold',
              'isItalics',
              'align',
              'isUpcase',
              'display',
              'color',
              'shade',
              'family',
              'weight',
              'lineHeight',
              'spacing',
              'children',
              'ellipse',
            ]),
            textProps = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a
            )(
              {
                size: size,
                isBold: isBold,
                isItalics: isItalics,
                align: align,
                isUpcase: isUpcase,
                display: display,
                color: color,
                shade: shade,
                family: family,
                weight: weight,
                lineHeight: lineHeight,
                spacing: spacing,
                ellipse: ellipse,
              },
              rest
            )
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            TextContainer,
            textProps,
            children
          )
        }
      ;(Text.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Text',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/typography/Text/Text.jsx'] = {
            name: 'Text',
            docgenInfo: Text.__docgenInfo,
            path: 'src/typography/Text/Text.jsx',
          })
    },
    148: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Divider
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          6
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1)
      function _templateObject() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )(['\n  border-bottom: 1px solid ', ';\n'])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var StyledDivider = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
          { displayName: 'Divider__StyledDivider', componentId: 'sc-1i0c99n-0' }
        )(function(_ref) {
          var padding = _ref.padding
          return {
            margin: '0 auto',
            paddingTop: padding,
            paddingBottom: padding,
            width: '50%',
          }
        }),
        DividerLine = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
          { displayName: 'Divider__DividerLine', componentId: 'sc-1i0c99n-1' }
        )(_templateObject(), function(_ref2) {
          return _ref2.theme.color.gray[8]
        }),
        Divider = function Divider(_ref3) {
          var _ref3$withLine = _ref3.withLine,
            withLine = void 0 !== _ref3$withLine && _ref3$withLine,
            _ref3$padding = _ref3.padding,
            padding = void 0 === _ref3$padding ? '1rem' : _ref3$padding
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            StyledDivider,
            { withLine: withLine, padding: padding },
            withLine &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                DividerLine,
                null
              )
          )
        }
      ;(Divider.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Divider',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/elements/Divider/Divider.jsx'] = {
            name: 'Divider',
            docgenInfo: Divider.__docgenInfo,
            path: 'src/elements/Divider/Divider.jsx',
          })
    },
    149: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Container
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _theme_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31),
        StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div.withConfig(
          {
            displayName: 'Container__StyledContainer',
            componentId: 'sc-1j0r007-0',
          }
        )(function(_ref) {
          var border = _ref.border,
            width = _ref.width,
            minWidth = _ref.minWidth,
            maxWidth = _ref.maxWidth,
            height = _ref.height,
            minHeight = _ref.minHeight,
            maxHeight = _ref.maxHeight,
            padding = _ref.padding,
            paddingTop = _ref.paddingTop,
            paddingBottom = _ref.paddingBottom,
            paddingLeft = _ref.paddingLeft,
            paddingRight = _ref.paddingRight,
            paddingVertical = _ref.paddingVertical,
            paddingHorizontal = _ref.paddingHorizontal,
            margin = _ref.margin,
            marginTop = _ref.marginTop,
            marginBottom = _ref.marginBottom,
            marginLeft = _ref.marginLeft,
            marginRight = _ref.marginRight,
            marginVertical = _ref.marginVertical,
            marginHorizontal = _ref.marginHorizontal,
            shadow = _ref.shadow,
            theme = _ref.theme
          return {
            width: width,
            minWidth: minWidth,
            maxWidth: maxWidth,
            height: height,
            minHeight: minHeight,
            maxHeight: maxHeight,
            padding: Object(_theme_spacing__WEBPACK_IMPORTED_MODULE_2__.a)(
              padding,
              paddingVertical,
              paddingHorizontal,
              paddingTop,
              paddingBottom,
              paddingLeft,
              paddingRight
            ),
            margin: Object(_theme_spacing__WEBPACK_IMPORTED_MODULE_2__.a)(
              margin,
              marginVertical,
              marginHorizontal,
              marginTop,
              marginBottom,
              marginLeft,
              marginRight
            ),
            borderRadius: '0.5rem',
            border: border ? '1px solid black' : 'none',
            boxShadow: shadow ? theme.boxShadow.single[shadow] : '',
          }
        }),
        Container = function Container(_ref2) {
          var _ref2$width = _ref2.width,
            width = void 0 === _ref2$width ? 'auto' : _ref2$width,
            _ref2$minWidth = _ref2.minWidth,
            minWidth = void 0 === _ref2$minWidth ? 'auto' : _ref2$minWidth,
            _ref2$maxWidth = _ref2.maxWidth,
            maxWidth = void 0 === _ref2$maxWidth ? '100%' : _ref2$maxWidth,
            _ref2$height = _ref2.height,
            height = void 0 === _ref2$height ? 'auto' : _ref2$height,
            _ref2$minHeight = _ref2.minHeight,
            minHeight = void 0 === _ref2$minHeight ? 'auto' : _ref2$minHeight,
            _ref2$maxHeight = _ref2.maxHeight,
            maxHeight = void 0 === _ref2$maxHeight ? '100%' : _ref2$maxHeight,
            _ref2$border = _ref2.border,
            border = void 0 !== _ref2$border && _ref2$border,
            padding = _ref2.padding,
            paddingTop = _ref2.paddingTop,
            paddingBottom = _ref2.paddingBottom,
            paddingLeft = _ref2.paddingLeft,
            paddingRight = _ref2.paddingRight,
            paddingVertical = _ref2.paddingVertical,
            paddingHorizontal = _ref2.paddingHorizontal,
            margin = _ref2.margin,
            marginTop = _ref2.marginTop,
            marginBottom = _ref2.marginBottom,
            marginLeft = _ref2.marginLeft,
            marginRight = _ref2.marginRight,
            marginVertical = _ref2.marginVertical,
            marginHorizontal = _ref2.marginHorizontal,
            shadow = _ref2.shadow,
            children = _ref2.children,
            containerStyles = {
              border: border,
              width: width,
              minWidth: minWidth,
              maxWidth: maxWidth,
              height: height,
              minHeight: minHeight,
              maxHeight: maxHeight,
              padding: padding,
              paddingTop: paddingTop,
              paddingBottom: paddingBottom,
              paddingLeft: paddingLeft,
              paddingRight: paddingRight,
              paddingVertical: paddingVertical,
              paddingHorizontal: paddingHorizontal,
              margin: margin,
              marginTop: marginTop,
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              marginRight: marginRight,
              marginVertical: marginVertical,
              marginHorizontal: marginHorizontal,
              shadow: shadow,
            }
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            StyledContainer,
            containerStyles,
            children
          )
        }
      ;(Container.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Container',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/layout/Container/Container.jsx'] = {
            name: 'Container',
            docgenInfo: Container.__docgenInfo,
            path: 'src/layout/Container/Container.jsx',
          })
    },
    150: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Flex
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          346
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          347
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          358
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          356
        ),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1),
        StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div.withConfig(
          { displayName: 'Flex__StyledFlex', componentId: 'mdngl9-0' }
        )(function(_ref) {
          return {
            display: 'flex',
            maxWidth: '100%',
            flexDirection: _ref.isColumn ? 'column' : 'row',
            justifyContent: _ref.justifyContent,
            alignItems: _ref.alignItems,
            flexWrap: _ref.flexWrap,
            alignContent: _ref.alignContent,
          }
        }),
        Flex = (function(_React$Component) {
          Object(
            _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a
          )(Flex, _React$Component)
          var _super = Object(
            _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a
          )(Flex)
          function Flex() {
            return (
              Object(
                _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a
              )(this, Flex),
              _super.apply(this, arguments)
            )
          }
          return (
            Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a
            )(Flex, [
              {
                key: 'render',
                value: function render() {
                  var _this$props = this.props,
                    isColumn = _this$props.isColumn,
                    justifyContent = _this$props.justifyContent,
                    alignItems = _this$props.alignItems,
                    flexWrap = _this$props.flexWrap,
                    alignContent = _this$props.alignContent,
                    children = _this$props.children,
                    flexStyles = {
                      isColumn: isColumn,
                      justifyContent: justifyContent,
                      alignItems: alignItems,
                      flexWrap: flexWrap,
                      alignContent: alignContent,
                    }
                  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    StyledFlex,
                    flexStyles,
                    children
                  )
                },
              },
            ]),
            Flex
          )
        })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component)
      Flex.defaultProps = {
        isColumn: !1,
        justifyContent: 'start',
        alignItems: 'start',
        flexWrap: 'nowrap',
        alignContent: '',
      }
      var StyledFlexItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div.withConfig(
        { displayName: 'Flex__StyledFlexItem', componentId: 'mdngl9-1' }
      )(function(_ref2) {
        return {
          order: _ref2.order,
          grow: _ref2.grow,
          shrink: _ref2.shrink,
          basis: _ref2.basis,
          flex: _ref2.flex,
          alignSelf: _ref2.alignSelf,
        }
      })
      Flex.Item = function Item(_ref3) {
        var order = _ref3.order,
          _ref3$grow = _ref3.grow,
          grow = void 0 === _ref3$grow ? 0 : _ref3$grow,
          _ref3$shrink = _ref3.shrink,
          shrink = void 0 === _ref3$shrink ? 0 : _ref3$shrink,
          basis = _ref3.basis,
          alignSelf = _ref3.alignSelf,
          children = _ref3.children,
          flexItemStyles = {
            order: order,
            grow: grow,
            shrink: shrink,
            basis: basis,
            alignSelf: alignSelf,
          }
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          StyledFlexItem,
          flexItemStyles,
          children
        )
      }
    },
    153: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return colorList
      })
      var colorList = {
        red: 'red',
        redVivid: 'redVivid',
        orange: 'orange',
        orangeVivid: 'orangeVivid',
        yellow: 'yellow',
        yellowVivid: 'yellowVivid',
        lime: 'lime',
        limeVivid: 'limeVivid',
        green: 'green',
        greenVivid: 'greenVivid',
        teal: 'teal',
        tealVivid: 'tealVivid',
        cyan: 'cyan',
        cyanVivid: 'cyanVivid',
        lightBlue: 'lightBlue',
        lightBlueVivid: 'lightBlueVivid',
        blue: 'blue',
        blueVivid: 'blueVivid',
        indigo: 'indigo',
        indigoVivid: 'indigoVivid',
        purple: 'purple',
        purpleVivid: 'purpleVivid',
        magenta: 'magenta',
        magentaVivid: 'magentaVivid',
        pink: 'pink',
        pinkVivid: 'pinkVivid',
        blueGrey: 'blueGrey',
        coolGrey: 'coolGrey',
        grey: 'grey',
        warmGrey: 'warmGrey',
      }
    },
    154: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Button.a
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return Image_Image
        })
      var Button = __webpack_require__(24),
        taggedTemplateLiteral =
          (__webpack_require__(148), __webpack_require__(6)),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(1)
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var ImageContainer = styled_components_browser_esm.d.figure.withConfig({
          displayName: 'Image__ImageContainer',
          componentId: 'sc-1nqoqcq-0',
        })(function(_ref) {
          var theme = _ref.theme,
            height = _ref.height,
            width = _ref.width
          return {
            maxWidth: theme.spaceScale(width),
            height: theme.spaceScale(height),
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: theme.boxShadow.single[1],
          }
        }),
        StyledImage = styled_components_browser_esm.d.img.withConfig({
          displayName: 'Image__StyledImage',
          componentId: 'sc-1nqoqcq-1',
        })(_templateObject()),
        Image_Image = function Image(_ref2) {
          var image = _ref2.image,
            alt = _ref2.alt,
            _ref2$width = _ref2.width,
            width = void 0 === _ref2$width ? 12 : _ref2$width,
            _ref2$height = _ref2.height,
            styles = {
              width: width,
              height: void 0 === _ref2$height ? 12 : _ref2$height,
            }
          return react_default.a.createElement(
            ImageContainer,
            styles,
            react_default.a.createElement(StyledImage, { src: image, alt: alt })
          )
        }
      ;(Image_Image.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Image',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/elements/Image/Image.jsx'] = {
            name: 'Image',
            docgenInfo: Image_Image.__docgenInfo,
            path: 'src/elements/Image/Image.jsx',
          })
    },
    155: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return FlipCard
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return CardSide
        })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
        StyledFlipCard = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
          { displayName: 'FlipCard__StyledFlipCard', componentId: 'jvj272-0' }
        )(function(_ref) {
          var flipped = _ref.flipped,
            flipDirection = _ref.flipDirection
          return {
            perspective: '1000px',
            height: '100%',
            width: '100%',
            position: 'relative',
            '& div:first-child': {
              transform:
                flipped &&
                ('horizontal' === flipDirection
                  ? 'rotateY(-180deg)'
                  : 'rotateX(-180deg)'),
            },
            '& div:last-child': {
              transform:
                flipped &&
                ('horizontal' === flipDirection
                  ? 'rotateY(0deg)'
                  : 'rotateX(0deg)'),
            },
          }
        }),
        FlipCard = function FlipCard(_ref2) {
          var _ref2$flipDirection = _ref2.flipDirection,
            flipDirection =
              void 0 === _ref2$flipDirection
                ? 'horizontal'
                : _ref2$flipDirection,
            children = _ref2.children,
            _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            _useState2 = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a
            )(_useState, 2),
            flipped = _useState2[0],
            setFlipped = _useState2[1]
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            StyledFlipCard,
            {
              onClick: function onClick() {
                return setFlipped(!flipped)
              },
              flipDirection: flipDirection,
              flipped: flipped,
            },
            react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, function(
              child
            ) {
              return Object(
                react__WEBPACK_IMPORTED_MODULE_1__.cloneElement
              )(child, { flipDirection: flipDirection })
            })
          )
        },
        StyledCardSide = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
          { displayName: 'FlipCard__StyledCardSide', componentId: 'jvj272-1' }
        )(function(_ref3) {
          var backgroundColor = _ref3.backgroundColor,
            side = _ref3.side,
            theme = _ref3.theme,
            isPaddingless = _ref3.isPaddingless,
            _ref3$flipDirection = _ref3.flipDirection,
            flipDirection =
              void 0 === _ref3$flipDirection
                ? 'horizontal'
                : _ref3$flipDirection
          return {
            backgroundColor: backgroundColor,
            transform:
              'front' === side
                ? 'horizontal' === flipDirection
                  ? 'rotateY(0deg)'
                  : 'rotateX(0deg)'
                : 'horizontal' === flipDirection
                ? 'rotateY(180deg)'
                : 'rotateX(180deg)',
            padding: isPaddingless ? 'auto' : '0.5rem',
            boxShadow: theme.boxShadow.single[2],
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transition: 'all 400ms ease',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            border: '2px solid black',
            borderRadius: '0.5rem',
          }
        }),
        CardSide = function CardSide(_ref4) {
          var backgroundColor = _ref4.backgroundColor,
            side = _ref4.side,
            _ref4$isPaddingless = _ref4.isPaddingless,
            isPaddingless =
              void 0 !== _ref4$isPaddingless && _ref4$isPaddingless,
            flipDirection = _ref4.flipDirection,
            children = _ref4.children,
            cardStyles = {
              backgroundColor: backgroundColor,
              isPaddingless: isPaddingless,
              side: side,
              flipDirection: flipDirection,
            }
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            StyledCardSide,
            cardStyles,
            children
          )
        }
      ;(FlipCard.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'FlipCard',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/FlipCard/FlipCard.jsx'] = {
            name: 'FlipCard',
            docgenInfo: FlipCard.__docgenInfo,
            path: 'src/components/FlipCard/FlipCard.jsx',
          }),
        (CardSide.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CardSide',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/FlipCard/FlipCard.jsx'] = {
            name: 'CardSide',
            docgenInfo: CardSide.__docgenInfo,
            path: 'src/components/FlipCard/FlipCard.jsx',
          })
    },
    19: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(149), __webpack_require__(150)
      var _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25)
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__.a
      })
    },
    215: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return ThemeProvider_ThemeProvider
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return GlobalStyles
        })
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(1),
        spacing = __webpack_require__(31),
        typography = __webpack_require__(84),
        color = __webpack_require__(62),
        getInsetColor = function getInsetColor(hsl, alpha) {
          var separated = hsl.indexOf(',') > -1 ? ',' : ' ',
            splitHsl = hsl
              .substr(4)
              .split(')')[0]
              .split(separated)
          return 'hsla('.concat(splitHsl.join(','), ', ').concat(alpha, ')')
        },
        theme = {
          boxShadow: {
            outset: function outset(hsl) {
              return 'inset 0 3px 2px '.concat(
                getInsetColor(hsl, 0.7),
                ', 0 2px 3px hsla(0, 0%, 0%, 0.4)'
              )
            },
            inset: function inset(hsl) {
              return '0 2px 2px '.concat(
                getInsetColor(hsl, 0.3),
                ', inset 0 2px 0 hsla(0, 0%, 0%, 0.3)'
              )
            },
            single: {
              1: '0 1px 3px hsla(0, 0%, 0%, 0.3)',
              2: '0 4px 6px hsla(0, 0%, 0%, 0.3)',
              3: '0 5px 15px hsla(0, 0%, 0%, 0.3)',
              4: '0 10px 24px hsla(0, 0%, 0%, 0.3)',
              5: '0 15px 35px hsla(0, 0%, 0%, 0.3)',
            },
            dual: {
              1: '0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)',
              2: '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)',
              3: '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .1)',
              4: '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .05)',
              5: '0 20px 40px hsla(0, 0%, 0%, .2)',
            },
          },
          spacing: spacing.c,
          spaceScale: spacing.b,
          fontSizes: typography.b,
          fontScale: typography.a,
          color: color.a,
          textContrast: color.b,
          breakpoint: {
            large: '1200px',
            medium: '992px',
            small: '768px',
            tiny: '576px',
          },
        },
        ThemeProvider_ThemeProvider = function ThemeProvider(_ref) {
          var rest = Object.assign({}, _ref)
          return react_default.a.createElement(
            styled_components_browser_esm.a,
            Object.assign({ theme: theme }, rest)
          )
        }
      ;(ThemeProvider_ThemeProvider.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ThemeProvider',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/theme/ThemeProvider.jsx'] = {
            name: 'ThemeProvider',
            docgenInfo: ThemeProvider_ThemeProvider.__docgenInfo,
            path: 'src/theme/ThemeProvider.jsx',
          })
      var taggedTemplateLiteral = __webpack_require__(6)
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          "\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: Rubik, sans-serif;\n  scroll-behavior: smooth;\n}\n\n/* Remove default padding */\nul,\nol {\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul,\nol,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n  padding: 0;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul,\nol {\n  list-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n  /* Typography 8-point grid\n  https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/ */\n  h1 {\n    font-size: 6rem;\n  }\n  h2 {\n    font-size: 3.75rem;\n  }\n  h3 {\n    font-size: 3rem;\n  }\n  h4 {\n    font-size: 2.125rem;\n  }\n  h5 {\n    font-size: 1.5rem;\n  }\n  h6 {\n    font-size: 1.25rem;\n  }\n  p {\n    font-size: 1rem;\n  }\n",
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var GlobalStyles = Object(styled_components_browser_esm.b)(
        _templateObject()
      )
    },
    24: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Button
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          43
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          35
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          85
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6
        ),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1)
      function _templateObject5() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a
        )([
          '\n  border-radius: ',
          ';\n  border: ',
          ';\n  color: ',
          ';\n  background-color: ',
          ';\n  position: relative;\n  font-family: roboto, sans-serif;\n  line-height: ',
          ';\n  font-weight: 500;\n  font-size: ',
          ';\n  text-transform: uppercase;\n  padding: ',
          ';\n  transition: all 200ms;\n  cursor: ',
          ';\n  outline: none;\n\n  &:hover, &:focus {\n    background-color: ',
          ';\n    transform: ',
          ';\n    box-shadow: ',
          ';\n  }\n\n  &:active {\n    transform: ',
          ';\n    box-shadow: ',
          ";\n  }\n\n  &:before, &:after {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 140%;\n    height: 100%;\n    left: -20%;\n    z-index: -1000;\n    transition: all ease-out .75s;\n    background-repeat: no-repeat;\n  }\n  &:before {\n    animation: ",
          ';\n    display: ',
          ';\n    top: -75%;\n    background-image: \n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle,  transparent 20%, ',
          ' 20%, transparent 30%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle,  transparent 10%, ',
          ' 15%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, transparent 10%, ',
          ' 20%, transparent 20%);\n    background-size: 20% 20%, 25% 25%, 20% 20%, 25% 25%, 30% 30%, 25% 25%, 30% 30%, 15% 15%, 25% 25%;\n  }\n  &:after {\n    animation: ',
          ';\n    display: ',
          ';\n    bottom: -75%;\n    background-image: \n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle,  transparent 20%, ',
          ' 20%, transparent 30%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle,  transparent 10%, ',
          ' 15%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, ',
          ' 20%, transparent 20%),\n      radial-gradient(circle, transparent 10%, ',
          ' 20%, transparent 20%);\n      background-size: 20% 20%, 25% 25%, 20% 20%, 25% 25%, 30% 30%, 25% 25%, 30% 30%, 15% 15%, 25% 25%;\n  }\n}\n',
        ])
        return (
          (_templateObject5 = function _templateObject5() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a
        )(['\n  ', ' ease-in-out .75s forwards;\n'])
        return (
          (_templateObject4 = function _templateObject4() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a
        )(['\n  ', ' ease-in-out .75s forwards\n'])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a
        )([
          '\n  0% {\n    background-position: 10% 10%, 20% 10%, 30% 10%, 40% 10%, 50% 10%, 60% 10%, 70% 10%, 80% 10%, 90% 10%;\n  }\n  50% {\n    background-position: 0% 80%, 10% 80%, 20% 60%, 30% 100%, 50% 70%, 70% 60%, 80% 70%, 90% 50%, 100% 40%;\n  }\n  100% {\n    background-position: 0% 90%, 10% 90%, 20% 70%, 30% 110%, 50% 80%, 70% 70%, 80% 75%, 90% 90%, 100% 60%;\n    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;\n  }\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a
        )([
          '\n  0%{\n    background-position: 10% 90%, 20% 90%, 30% 90%, 40% 90%, 50% 90%, 60% 90%, 70% 90%, 80% 90%, 90% 90%;\n  }\n  50% {\n    background-position: 0% 40%, 10% 20%, 20% 40%, 30% 0%, 50% 30%, 70% 50%, 80% 50%, 90% 20%, 100% 30%;\n  }\n  100% {\n    background-position: -10% 70%, 0% 10%, 30% 30%, 40% -10%, 50% 20%, 70% 40%, 80% 40%, 90% 10%, 100% 30%;\n    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;\n  }\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var topBubbles = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.e)(
          _templateObject()
        ),
        bottomBubbles = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_5__.e
        )(_templateObject2()),
        topAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.c)(
          _templateObject3(),
          topBubbles
        ),
        bottomAnimation = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_5__.c
        )(_templateObject4(), bottomBubbles),
        StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.d.button.withConfig(
          { displayName: 'Button__StyledButton', componentId: 'je5gj2-0' }
        )(
          _templateObject5(),
          function(_ref) {
            return _ref.borderRadius
          },
          function(_ref2) {
            var border = _ref2.border
            return border || 'none'
          },
          function(_ref3) {
            var color = _ref3.color
            return color || 'black'
          },
          function(_ref4) {
            return _ref4.backgroundColor
          },
          function(_ref5) {
            return _ref5.theme.spaceScale(5)
          },
          function(_ref6) {
            return _ref6.theme.fontScale(2)
          },
          function(_ref7) {
            return _ref7.paddingSize
          },
          function(_ref8) {
            return _ref8.isDisabled ? 'default' : 'pointer'
          },
          function(_ref9) {
            return _ref9.focusBackground
          },
          function(_ref10) {
            var isDisabled = _ref10.isDisabled,
              hover = _ref10.hover
            return !isDisabled && hover ? 'translateY(-0.3rem)' : ''
          },
          function(_ref11) {
            var theme = _ref11.theme
            return _ref11.hover && theme.boxShadow.single[2]
          },
          function(_ref12) {
            var isDisabled = _ref12.isDisabled,
              hover = _ref12.hover
            return !isDisabled && hover ? 'translateY(-0.1rem)' : ''
          },
          function(_ref13) {
            var theme = _ref13.theme
            return _ref13.hover && theme.boxShadow.single[1]
          },
          function(_ref14) {
            return _ref14.animate ? topAnimation : ''
          },
          function(_ref15) {
            return _ref15.animate ? 'block' : 'none'
          },
          function(_ref16) {
            return _ref16.bubbleColor
          },
          function(_ref17) {
            return _ref17.bubbleColor
          },
          function(_ref18) {
            return _ref18.bubbleColor
          },
          function(_ref19) {
            return _ref19.bubbleColor
          },
          function(_ref20) {
            return _ref20.bubbleColor
          },
          function(_ref21) {
            return _ref21.bubbleColor
          },
          function(_ref22) {
            return _ref22.bubbleColor
          },
          function(_ref23) {
            return _ref23.bubbleColor
          },
          function(_ref24) {
            return _ref24.bubbleColor
          },
          function(_ref25) {
            return _ref25.animate ? bottomAnimation : ''
          },
          function(_ref26) {
            return _ref26.animate ? 'block' : 'none'
          },
          function(_ref27) {
            return _ref27.bubbleColor
          },
          function(_ref28) {
            return _ref28.bubbleColor
          },
          function(_ref29) {
            return _ref29.bubbleColor
          },
          function(_ref30) {
            return _ref30.bubbleColor
          },
          function(_ref31) {
            return _ref31.bubbleColor
          },
          function(_ref32) {
            return _ref32.bubbleColor
          },
          function(_ref33) {
            return _ref33.bubbleColor
          },
          function(_ref34) {
            return _ref34.bubbleColor
          },
          function(_ref35) {
            return _ref35.bubbleColor
          }
        ),
        Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.f)(
          function(_ref36) {
            var borderRadius,
              paddingSize,
              color = _ref36.color,
              _ref36$shade = _ref36.shade,
              shade = void 0 === _ref36$shade ? 4 : _ref36$shade,
              _ref36$type = _ref36.type,
              type = void 0 === _ref36$type ? 'button' : _ref36$type,
              _ref36$rounded = _ref36.rounded,
              rounded = void 0 === _ref36$rounded ? 'small' : _ref36$rounded,
              _ref36$size = _ref36.size,
              size = void 0 === _ref36$size ? 'small' : _ref36$size,
              _ref36$variant = _ref36.variant,
              variant = void 0 === _ref36$variant ? 'filled' : _ref36$variant,
              _ref36$hover = _ref36.hover,
              hover = void 0 !== _ref36$hover && _ref36$hover,
              _ref36$isDisabled = _ref36.isDisabled,
              isDisabled = void 0 !== _ref36$isDisabled && _ref36$isDisabled,
              _ref36$onClick = _ref36.onClick,
              _onClick =
                void 0 === _ref36$onClick ? function() {} : _ref36$onClick,
              theme = _ref36.theme,
              _ref36$bubble = _ref36.bubble,
              bubble = void 0 === _ref36$bubble || _ref36$bubble,
              children = _ref36.children,
              rest = Object(
                _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a
              )(_ref36, [
                'color',
                'shade',
                'type',
                'rounded',
                'size',
                'variant',
                'hover',
                'isDisabled',
                'onClick',
                'theme',
                'bubble',
                'children',
              ]),
              _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(
                !1
              ),
              _React$useState2 = Object(
                _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a
              )(_React$useState, 2),
              animate = _React$useState2[0],
              setAnimate = _React$useState2[1]
            switch (rounded) {
              case 'small':
                borderRadius = theme.spaceScale(1)
                break
              case 'medium':
                borderRadius = theme.spaceScale(2)
                break
              case 'large':
                borderRadius = theme.spaceScale(4)
                break
              case 'full':
                borderRadius = theme.spaceScale(16)
                break
              default:
                borderRadius = '0rem'
            }
            switch (size) {
              case 'small':
                paddingSize = ''
                  .concat(theme.spaceScale(1), ' ')
                  .concat(theme.spaceScale(2))
                break
              case 'medium':
                paddingSize = ''
                  .concat(theme.spaceScale(2), ' ')
                  .concat(theme.spaceScale(3))
                break
              case 'large':
                paddingSize = ''
                  .concat(theme.spaceScale(2), ' ')
                  .concat(theme.spaceScale(4))
                break
              default:
                paddingSize = ''
                  .concat(theme.spaceScale(2), ' ')
                  .concat(theme.spaceScale(3))
            }
            var variants = {
                main: {
                  border: 'none',
                  backgroundColor: color
                    ? theme.color[color][shade || 1]
                    : 'white',
                  color: theme.textContrast(
                    color ? theme.color[color][shade] : 'hsl(0, 100%, 100%)'
                  ),
                },
                focus: {
                  backgroundColor: color
                    ? theme.color[color][shade + 1 || 2]
                    : theme.color.grey[1],
                },
              },
              main = variants.main,
              focus = variants.focus
            switch (variant) {
              case 'outline':
                ;(main.border = '1px solid '.concat(
                  theme.color[color][shade || 1]
                )),
                  (main.color = color
                    ? theme.color[color][shade || 4]
                    : 'black'),
                  (main.backgroundColor = 'transparent'),
                  (focus.backgroundColor = color
                    ? theme.color[color][1]
                    : theme.color.grey[1])
                break
              case 'text':
                ;(main.color = color
                  ? theme.color[color][shade || 4]
                  : 'black'),
                  (main.backgroundColor = 'transparent'),
                  (focus.backgroundColor = color
                    ? theme.color[color][1]
                    : theme.color.grey[1])
            }
            isDisabled &&
              ((main.color = theme.color.grey[6]),
              (main.border = '1px solid transparent'),
              (main.backgroundColor = theme.color.grey[1]),
              (focus.backgroundColor = theme.color.grey[1]))
            var buttonStyles = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a
            )(
              {
                type: type,
                hover: !isDisabled && hover,
                isDisabled: isDisabled,
                borderRadius: borderRadius,
                paddingSize: paddingSize,
                border: main.border,
                color: main.color,
                backgroundColor: main.backgroundColor,
                focusBackground: focus.backgroundColor,
              },
              rest
            )
            return (
              bubble &&
                !isDisabled &&
                (buttonStyles.bubbleColor =
                  'filled' === variant ? main.backgroundColor : main.color),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(
                function() {
                  animate &&
                    setTimeout(
                      function() {
                        setAnimate(!1)
                      },
                      [750]
                    )
                },
                [animate]
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                StyledButton,
                Object.assign(
                  {
                    animate: animate,
                    onClick: function onClick(e) {
                      isDisabled || (setAnimate(!0), _onClick(e))
                    },
                  },
                  buttonStyles
                ),
                children
              )
            )
          }
        )
    },
    25: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Grid
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          43
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          85
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
        _theme_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
        StyledGridItem = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'Grid__StyledGridItem', componentId: 'x8sy2o-0' }
        )(function(_ref) {
          var column = _ref.column,
            row = _ref.row,
            area = _ref.area,
            justifySelf = _ref.justifySelf,
            alignSelf = _ref.alignSelf
          _ref.theme
          return {
            gridArea: area,
            gridColumn: column,
            gridRow: row,
            justifySelf: justifySelf,
            alignSelf: alignSelf,
          }
        }),
        StyledGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'Grid__StyledGrid', componentId: 'x8sy2o-1' }
        )(function(_ref3) {
          var isInline = _ref3.isInline,
            templateRows = _ref3.templateRows,
            templateColumns = _ref3.templateColumns,
            autoRows = _ref3.autoRows,
            autoColumns = _ref3.autoColumns,
            autoFlow = _ref3.autoFlow,
            templateAreas = _ref3.templateAreas,
            columnGap = _ref3.columnGap,
            rowGap = _ref3.rowGap,
            gap = _ref3.gap,
            justifyItems = _ref3.justifyItems,
            alignItems = _ref3.alignItems,
            justifyContent = _ref3.justifyContent,
            alignContent = _ref3.alignContent,
            theme = _ref3.theme
          return {
            display: isInline ? 'inline-grid' : 'grid',
            width: '100%',
            gridTemplateColumns: templateColumns,
            gridTemplateRows: templateRows,
            gridAutoRows: autoRows,
            gridAutoColumns: autoColumns,
            gridAutoFlow: autoFlow,
            gridTemplateAreas: '"'.concat(templateAreas.join('" "'), '"'),
            gridGap: theme.spaceScale(gap),
            gridColumnGap: theme.spaceScale(columnGap),
            gridRowGap: theme.spaceScale(rowGap),
            justifyItems: justifyItems,
            alignItems: alignItems,
            justifyContent: justifyContent,
            alignContent: alignContent,
          }
        }),
        Grid = function Grid(_ref4) {
          var _ref4$isInline = _ref4.isInline,
            isInline = void 0 !== _ref4$isInline && _ref4$isInline,
            templateRows = _ref4.templateRows,
            templateColumns = _ref4.templateColumns,
            autoRows = _ref4.autoRows,
            autoColumns = _ref4.autoColumns,
            autoFlow = _ref4.autoFlow,
            templateAreas = _ref4.templateAreas,
            columnGap = _ref4.columnGap,
            rowGap = _ref4.rowGap,
            gap = _ref4.gap,
            justifyItems = _ref4.justifyItems,
            alignItems = _ref4.alignItems,
            justifyContent = _ref4.justifyContent,
            alignContent = _ref4.alignContent,
            children = _ref4.children,
            rest = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a
            )(_ref4, [
              'isInline',
              'templateRows',
              'templateColumns',
              'autoRows',
              'autoColumns',
              'autoFlow',
              'templateAreas',
              'columnGap',
              'rowGap',
              'gap',
              'justifyItems',
              'alignItems',
              'justifyContent',
              'alignContent',
              'children',
            ]),
            gridStyles = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a
            )(
              {
                isInline: isInline,
                templateRows: templateRows,
                templateColumns: templateColumns,
                autoRows: autoRows,
                autoColumns: autoColumns,
                autoFlow: autoFlow,
                templateAreas: templateAreas,
                columnGap: columnGap,
                rowGap: rowGap,
                gap: gap,
                justifyItems: justifyItems,
                alignItems: alignItems,
                justifyContent: justifyContent,
                alignContent: alignContent,
              },
              rest
            )
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            StyledGrid,
            gridStyles,
            children
          )
        }
      ;(Grid.Item = function GridItem(_ref2) {
        var column = _ref2.column,
          row = _ref2.row,
          area = _ref2.area,
          children = _ref2.children,
          rest = Object(
            _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a
          )(_ref2, ['column', 'row', 'area', 'children'])
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          StyledGridItem,
          Object.assign({ column: column, row: row, area: area }, rest),
          children
        )
      }),
        (Grid.space = function(scale) {
          return Object(_theme_spacing__WEBPACK_IMPORTED_MODULE_4__.b)(scale)
        }),
        (Grid.fr = function(fr) {
          return ''.concat(fr, 'fr')
        }),
        (Grid.repeat = function(amount, value) {
          return 'repeat('.concat(amount, ', ').concat(value, ')')
        }),
        (Grid.minMax = function(min, max) {
          return 'minmax('.concat(min, ', ').concat(max, ')')
        }),
        (Grid.minContent = 'min-content'),
        (Grid.maxContent = 'max-content'),
        (Grid.autoFill = 'auto-fill'),
        (Grid.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'Item',
              docblock: null,
              modifiers: ['static'],
              params: [{ name: '_ref2', type: null }],
              returns: null,
            },
            {
              name: 'space',
              docblock:
                "returns rem size from theme scale\r\n@param {number} scale - the number from the scale, 1 - 16\r\n\r\n@returns the scale with 'rem' appended to it",
              modifiers: ['static'],
              params: [
                {
                  name: 'scale',
                  description: 'the number from the scale, 1 - 16',
                  type: { name: 'number' },
                  optional: !1,
                },
              ],
              returns: {
                description: "the scale with 'rem' appended to it",
                type: null,
              },
              description: 'returns rem size from theme scale',
            },
            {
              name: 'fr',
              docblock:
                "returns number in fr. Should be used when defining columns and rows\r\n\r\n@param {number} fr - the fraction of space the item should take\r\n\r\n@returns formatted string combined with 'fr'",
              modifiers: ['static'],
              params: [
                {
                  name: 'fr',
                  description: 'the fraction of space the item should take',
                  type: { name: 'number' },
                  optional: !1,
                },
              ],
              returns: {
                description: "formatted string combined with 'fr'",
                type: null,
              },
              description:
                'returns number in fr. Should be used when defining columns and rows',
            },
            {
              name: 'repeat',
              docblock:
                'returns a repeat string used for defining columns and rows\r\n\r\n@param {number} amount - The amount of times repeated\r\n@param {string | number} value - The value repeated',
              modifiers: ['static'],
              params: [
                {
                  name: 'amount',
                  description: 'The amount of times repeated',
                  type: { name: 'number' },
                  optional: !1,
                },
                {
                  name: 'value',
                  description: 'The value repeated',
                  type: {
                    name: 'union',
                    elements: [{ name: 'string' }, { name: 'number' }],
                  },
                  optional: !1,
                },
              ],
              returns: null,
              description:
                'returns a repeat string used for defining columns and rows',
            },
            {
              name: 'minMax',
              docblock:
                'returns a string formatted for minmax in grid row/columns\r\n\r\n@param {string | number} min - minimum value\r\n@param {string | number} max - maximum value',
              modifiers: ['static'],
              params: [
                {
                  name: 'min',
                  description: 'minimum value',
                  type: {
                    name: 'union',
                    elements: [{ name: 'string' }, { name: 'number' }],
                  },
                  optional: !1,
                },
                {
                  name: 'max',
                  description: 'maximum value',
                  type: {
                    name: 'union',
                    elements: [{ name: 'string' }, { name: 'number' }],
                  },
                  optional: !1,
                },
              ],
              returns: null,
              description:
                'returns a string formatted for minmax in grid row/columns',
            },
          ],
          displayName: 'Grid',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/layout/Grid/Grid.jsx'] = {
            name: 'Grid',
            docgenInfo: Grid.__docgenInfo,
            path: 'src/layout/Grid/Grid.jsx',
          })
    },
    31: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'c', function() {
        return spacing
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return spaceScale
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return formatPaddingAndMargin
        })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          357
        ),
        spacing = {
          1: 0.25,
          2: 0.5,
          3: 0.75,
          4: 1,
          5: 1.5,
          6: 2,
          7: 3,
          8: 4,
          9: 6,
          10: 8,
          11: 12,
          12: 16,
          13: 24,
          14: 32,
          15: 40,
          16: 48,
          17: 60,
          18: 72,
        },
        spaceScale = function spaceScale() {
          var size =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 4,
            unit =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'rem'
          return ''.concat(spacing[size]).concat(unit)
        },
        formatPaddingAndMargin = function formatPaddingAndMargin(
          spacing,
          spacingVertical,
          spacingHorizontal,
          spacingTop,
          spacingBottom,
          spacingLeft,
          spacingRight
        ) {
          var spacingArr = [0, 0, 0, 0]
          return (
            spacing &&
              (spacingArr =
                'number' == typeof spacing
                  ? [spacing]
                  : Object(
                      _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a
                    )(spacing)),
            spacingVertical && (spacingArr = [spacingVertical, 0]),
            spacingHorizontal && (spacingArr = [0, spacingHorizontal]),
            spacingTop && (spacingArr[0] = spacingTop),
            spacingBottom && (spacingArr[2] = spacingBottom),
            spacingRight && (spacingArr[1] = spacingRight),
            spacingLeft && (spacingArr[3] = spacingLeft),
            spacingArr
              .map(function(unit) {
                return (0 !== unit && spaceScale(unit)) || '0rem'
              })
              .join(' ')
          )
        }
    },
    338: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Disclosure
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          6
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1)
      function _templateObject3() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  display: ', ';\n'])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )([
          '\n  font-size: 1.3rem;\n  font-weight: bold;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  overflow: hidden;\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  position: relative;\n  transition: all 300ms ease-in-out;\n'])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var DisclosureContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          {
            displayName: 'Disclosure__DisclosureContainer',
            componentId: 'q692hf-0',
          }
        )(_templateObject()),
        DisclosureButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.button.withConfig(
          {
            displayName: 'Disclosure__DisclosureButton',
            componentId: 'q692hf-1',
          }
        )(_templateObject2()),
        DisclosureContent = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          {
            displayName: 'Disclosure__DisclosureContent',
            componentId: 'q692hf-2',
          }
        )(_templateObject3(), function(_ref) {
          return _ref.isOpen ? 'block' : 'none'
        }),
        Disclosure = function Disclosure(_ref2) {
          var title = _ref2.title,
            children = _ref2.children,
            _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),
            _useState2 = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a
            )(_useState, 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1]
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            DisclosureContainer,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              DisclosureButton,
              {
                type: 'button',
                'aria-expanded': isOpen,
                onClick: function onClick() {
                  return setIsOpen(!isOpen)
                },
                'aria-controls': 'disclosure-button',
              },
              title
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              DisclosureContent,
              { id: 'disclosure-button', isOpen: isOpen },
              children
            )
          )
        }
      ;(Disclosure.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Disclosure',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/Disclosure/Disclosure.jsx'
          ] = {
            name: 'Disclosure',
            docgenInfo: Disclosure.__docgenInfo,
            path: 'src/components/Disclosure/Disclosure.jsx',
          })
    },
    339: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = ''
    },
    340: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Fallback
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(154),
        _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11),
        FallbackContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.section.withConfig(
          {
            displayName: 'Fallback__FallbackContainer',
            componentId: 'sc-1p576as-0',
          }
        )(function(_ref) {
          var theme = _ref.theme
          return {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            width: '100%',
            '& figure': { marginBottom: theme.spaceScale(4) },
            '& h4': { marginBottom: theme.spaceScale(2) },
          }
        }),
        Fallback = function Fallback(_ref2) {
          var image = _ref2.image,
            imageAlt = _ref2.imageAlt,
            message = _ref2.message,
            children = _ref2.children
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            FallbackContainer,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _elements__WEBPACK_IMPORTED_MODULE_2__.b,
              { width: '12', image: image, alt: imageAlt }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _typography__WEBPACK_IMPORTED_MODULE_3__.a,
              { size: '7', as: 'h4' },
              message
            ),
            children
          )
        }
      ;(Fallback.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Fallback',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Fallback/Fallback.jsx'] = {
            name: 'Fallback',
            docgenInfo: Fallback.__docgenInfo,
            path: 'src/components/Fallback/Fallback.jsx',
          })
    },
    341: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = ''
    },
    342: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = "I'm the ReadMe.md for FlipCard!\r\n"
    },
    343: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return SimpleCard
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          6
        ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1)
      function _templateObject8() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  font-size: 0.8rem;\n'])
        return (
          (_templateObject8 = function _templateObject8() {
            return data
          }),
          data
        )
      }
      function _templateObject7() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  font-size: 0.8rem;\n  font-style: italic;\n'])
        return (
          (_templateObject7 = function _templateObject7() {
            return data
          }),
          data
        )
      }
      function _templateObject6() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )([
          '\n  background-color: gold;\n  border-radius: 50%;\n  width: 1.3rem;\n  height: 1.3rem;\n  box-shadow: 0 2px 4px black;\n',
        ])
        return (
          (_templateObject6 = function _templateObject6() {
            return data
          }),
          data
        )
      }
      function _templateObject5() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )([
          '\n  position: absolute;\n  top: 95%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: ',
          ';\n  border-radius: 2rem / 4rem;\n  padding: 0 0.8rem;\n  font-weight: bold;\n  box-shadow: ',
          ';\n',
        ])
        return (
          (_templateObject5 = function _templateObject5() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  font-weight: bold;\n'])
        return (
          (_templateObject4 = function _templateObject4() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )([
          '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n',
        ])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )([
          '\n  padding: 0.8rem 1.5rem;\n  width: 22rem;\n  color: ',
          ';\n  background-color: ',
          ';\n  border-radius: 2rem;\n  cursor: pointer;\n  transition: all 300ms ease-out;\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a
        )(['\n  position: relative;\n  width: 22rem;\n  margin: 1rem;\n'])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var OuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          {
            displayName: 'SimpleCard__OuterContainer',
            componentId: 'sc-1dgj5lm-0',
          }
        )(_templateObject()),
        CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          {
            displayName: 'SimpleCard__CardContainer',
            componentId: 'sc-1dgj5lm-1',
          }
        )(
          _templateObject2(),
          function(_ref) {
            var theme = _ref.theme
            return theme.textContrast(theme.color.blue[9])
          },
          function(_ref2) {
            return _ref2.theme.color.blue[9]
          }
        ),
        CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'SimpleCard__CardInfo', componentId: 'sc-1dgj5lm-2' }
        )(_templateObject3()),
        CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'SimpleCard__CardTitle', componentId: 'sc-1dgj5lm-3' }
        )(_templateObject4()),
        CardSet =
          (styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig({
            displayName: 'SimpleCard__PowerToughnessBig',
            componentId: 'sc-1dgj5lm-4',
          })(
            _templateObject5(),
            function(_ref3) {
              return _ref3.theme.color.blue[9]
            },
            function(_ref4) {
              var theme = _ref4.theme
              return theme.boxShadow.outset(theme.color.blue[1])
            }
          ),
          styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig({
            displayName: 'SimpleCard__CardSet',
            componentId: 'sc-1dgj5lm-5',
          })(_templateObject6())),
        CardType = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'SimpleCard__CardType', componentId: 'sc-1dgj5lm-6' }
        )(_templateObject7()),
        CardText = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
          { displayName: 'SimpleCard__CardText', componentId: 'sc-1dgj5lm-7' }
        )(_templateObject8()),
        SimpleCard = function SimpleCard() {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(
              !1
            ),
            _React$useState2 = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a
            )(_React$useState, 2),
            showMore = _React$useState2[0],
            setShowMore = _React$useState2[1]
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            OuterContainer,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              CardContainer,
              {
                showMore: showMore,
                onClick: function onClick() {
                  return setShowMore(!showMore)
                },
              },
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                CardInfo,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  CardTitle,
                  null,
                  'Aphemia, the Cacophony'
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  null,
                  '1B'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                CardInfo,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  CardType,
                  null,
                  'Legendary Enchantment Creature'
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  CardSet,
                  null
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                'hr',
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                CardText,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  null,
                  'Flying'
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'br',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  null,
                  'At the beginning of your end step, you may exile an enchantment card from your graveyarrd. If you do, creat a 2/2 black Zombie creature token.'
                )
              )
            )
          )
        }
      ;(SimpleCard.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SimpleCard',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/magicCard/SimpleCard.jsx'
          ] = {
            name: 'SimpleCard',
            docgenInfo: SimpleCard.__docgenInfo,
            path: 'src/components/magicCard/SimpleCard.jsx',
          })
    },
    344: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148)
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _Divider__WEBPACK_IMPORTED_MODULE_0__.a
      })
    },
    345: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a =
        "# Spacing 📐\r\n\r\n## Usage\r\n\r\nSpacing is used to define the sizes of fonts, padding, margins etc.\r\n\r\nIt's a predefined system that is a part of the theme that can be accessed from themeProvider. It is also exported as formatSize globally.\r\n\r\nThere are 16 sizes in all. 1 being the smallest and 16 being the largest.\r\n\r\n### formatSize\r\n\r\nThe primary way to use the spacing system is with formatSize. It accepts two params, 'size' and 'unit'.\r\n\r\n| Param | Default Value | Required? | Description                                                       |\r\n| ----- | ------------- | --------- | ----------------------------------------------------------------- |\r\n| size  | 4             | Yes       | Must be between 1-16, returns the size from the spacing           |\r\n| unit  | 'rem'         | no        | Specifies unit of measurement. Other options are 'px', 'em', etc. |\r\n\r\n## Size System\r\n\r\n1. (16 \\* 0.25) = 4px\r\n2. (16 \\* 0.5) = 8px\r\n3. (16 \\* 0.75) = 12px\r\n4. (16 \\* 1) = 16px\r\n5. (16 \\* 1.5) = 24px\r\n6. (16 \\* 2) = 32px\r\n7. (16 \\* 3) = 48px\r\n8. (16 \\* 4) = 64px\r\n9. (16 \\* 6) = 96px\r\n10. (16 \\* 8) = 128px\r\n11. (16 \\* 12) = 192px\r\n12. (16 \\* 16) = 256px\r\n13. (16 \\* 24) = 384px\r\n14. (16 \\* 32) = 512px\r\n15. (16 \\* 40) = 640px\r\n16. (16 \\* 48) = 768px\r\n"
    },
    348: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a =
        "# Button 🔲\n\n## Usage\n\nYou know, for when you need to click something! Use it as a way for users to interact with the website\n\nThe Button has 3 main variants: Default, Outline, and Text.\n\n## Props\n\n| Param      | Type    | Default Value | Required? | Description                                                                                     |\n| ---------- | ------- | ------------- | --------- | ----------------------------------------------------------------------------------------------- |\n| color      | string  | black         | no        | Changes the color of the buttons background and text. Can use any color from the theme paletter |\n| shade      | number  | 4             | no        | Changes the shade of the color. Must be between 1-10                                            |\n| type       | string  | button        | no        | Declares the type of button. Can by 'button', 'submit', and 'reset                              |\n| rounded    | string  | small         | no        | Changes the rounded edges of the button. Can be 'small', 'medium', 'large', 'full', and 'none'  |\n| size       | string  | small         | no        | Changes size of badding for the button. Can be 'small', 'medium', or 'large'                    |\n| variant    | string  | filled        | no        | Changes button style. Can be 'filled', 'outline', 'text'                                        |\n| isDisabled | boolean | false         | no        | Disables the button                                                                             |\n| onClick    | func    | function      | no        | Callback that is called on button click                                                         |\n| hover      | boolean | false         | no        | Applies hover effect when interacting with button                                               |\n| bubble     | boolean | true          | no        | Applies bubble effect on button click                                                           |\n\n## Example\n\n```react\n<Button color=\"blue\" shade={4} onClick={() => doTheThing()}>Confirm</Button>\n```\n"
    },
    349: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = ''
    },
    350: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return MagicCard
      })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          6
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          35
        ),
        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          43
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1)
      function _templateObject3() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )(['\n  display: flex;\n  flex-direction: column;\n'])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )([
          '\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 90%;\n  margin: 4px auto 0 auto;\n  font-size: 5px;\n  color: white;\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
        )([
          '\n  border: 5px solid black;\n  background-color: black;\n  width: 340px;\n  height: 480px;\n  border-radius: 5px;\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var primary = {
          green: {
            light: 'hsl(150, 25%, 90%)',
            medium: 'hsl(150, 25%, 80%)',
            dark: 'hsl(140, 35%, 60%), hsl(160, 15%, 40%)',
            border: 'hsl(150, 100%, 20%)',
          },
          blue: {
            light: 'hsl(210, 35%, 90%)',
            medium: 'hsl(210, 35%, 80%)',
            dark: 'hsl(200, 45%, 60%), hsl(220, 25%, 40%)',
            border: 'hsl(210, 100%, 20%)',
          },
          red: {
            light: 'hsl(0, 45%, 90%)',
            medium: 'hsl(0, 45%, 80%)',
            dark: 'hsl(350, 55%, 60%), hsl(10, 35%, 40%)',
            border: 'hsl(0, 100%, 20%)',
          },
          black: {
            light: 'hsl(0, 0%, 90%)',
            medium: 'hsl(0, 0%, 80%)',
            dark: 'hsl(340, 0%, 35%), hsl(10, 0%, 5%)',
            border: 'hsl(0, 0%, 0%)',
          },
          white: {
            light: 'hsl(40, 50%, 100%)',
            medium: 'hsl(40, 50%, 98%)',
            dark: 'hsl(30, 50%, 95%), hsl(50, 30%, 85%)',
            border: 'hsl(0, 0%, 0%)',
          },
          artifact: {
            light: 'hsl(30, 0%, 95%)',
            medium: 'hsl(30, 10%, 95%)',
            dark: 'hsl(200, 25%, 70%), hsl(200, 15%, 55%)',
            border: 'hsl(0, 0%, 0%)',
          },
          multi: {
            light: 'hsl(45, 47%, 90%)',
            medium: 'hsl(45, 47%, 80%)',
            dark: 'hsl(55, 45%, 65%), hsl(35, 40%, 50%)',
            border: 'hsl(45, 37%, 50%)',
          },
        },
        cardColors = Object(
          _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a
        )({}, primary)
      ;[
        'blue-black',
        'black-green',
        'blue-red',
        'white-black',
        'black-red',
        'green-white',
        'green-blue',
        'white-blue',
        'red-white',
        'red-green',
      ].forEach(function(color) {
        cardColors[color] = (function buildMultiColor(color) {
          var _color$split = color.split('-'),
            _color$split2 = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a
            )(_color$split, 2),
            first = _color$split2[0],
            second = _color$split2[1]
          return {
            light: 'linear-gradient(to right, '
              .concat(primary[first].light, ', ')
              .concat(primary[second].light, ')'),
            medium: 'linear-gradient(to right, '
              .concat(primary[first].medium, ', ')
              .concat(primary[second].medium, ')'),
            dark: 'to right, '
              .concat(primary[first].dark, ', ')
              .concat(primary[second].dark),
            border: ''
              .concat(primary[first].border, ' ')
              .concat(primary[second].border, ' ')
              .concat(primary[second].border, ' ')
              .concat(primary[first].border),
          }
        })(color)
      })
      var OuterBorder = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__OuterBorder', componentId: 'ftnwca-0' }
        )(_templateObject()),
        InnerBorder = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__InnerBorder', componentId: 'ftnwca-1' }
        )(function(_ref) {
          var color = _ref.color
          return {
            background: 'linear-gradient('.concat(cardColors[color].dark, ')'),
            height: '92%',
            width: '99.9%',
            borderRadius: '5px',
            display: 'grid',
            gridTemplateRows: '8% 45% 8% 43%',
            paddingTop: '2%',
          }
        }),
        CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardTitle', componentId: 'ftnwca-2' }
        )(function(_ref2) {
          var color = _ref2.color
          return {
            width: '98%',
            height: '100%',
            background: cardColors[color].medium,
            border: '2px solid',
            borderColor: cardColors[color].border,
            margin: '0 auto',
            borderRadius: '2rem/4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            zIndex: 200,
          }
        }),
        CardImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardImage', componentId: 'ftnwca-3' }
        )(function(_ref3) {
          var color = _ref3.color
          return {
            backgroundImage: 'url("https://i.redd.it/w2p72p6ux5n31.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '92%',
            margin: '-2px auto',
            border: '2px solid',
            borderColor: cardColors[color].border,
          }
        }),
        CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardDescription', componentId: 'ftnwca-4' }
        )(function(_ref4) {
          var color = _ref4.color
          return {
            width: '94%',
            background: cardColors[color].light,
            margin: '-2px auto 0 auto',
            fontSize: '10px',
            padding: '0.3rem',
            border: '2px solid',
            borderColor: cardColors[color].border,
            position: 'relative',
          }
        }),
        CardPower = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardPower', componentId: 'ftnwca-5' }
        )(function(_ref5) {
          var color = _ref5.color
          return {
            position: 'absolute',
            bottom: '-6px',
            right: '-6px',
            zIndex: 300,
            fontSize: '16px',
            width: '25%',
            borderRadius: '2rem/4rem',
            background: cardColors[color].light,
            border: '2px solid',
            borderColor: cardColors[color].border,
            textAlign: 'center',
            letterSpacing: '2px',
          }
        }),
        CardExtra = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardExtra', componentId: 'ftnwca-6' }
        )(_templateObject2()),
        CardArtist = styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div.withConfig(
          { displayName: 'MagicCard__CardArtist', componentId: 'ftnwca-7' }
        )(_templateObject3()),
        MagicCard = function MagicCard(_ref6) {
          var color = _ref6.color
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            OuterBorder,
            null,
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              InnerBorder,
              { color: color },
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                CardTitle,
                { color: color },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { style: { marginLeft: '4px' } },
                  'Garenbrig Paladin'
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { style: { marginRight: '4px' } },
                  '4G'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                CardImage,
                { color: color }
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                CardTitle,
                { color: color },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { style: { marginLeft: '4px' } },
                  'Creature - Giant Knight'
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  { style: { marginRight: '4px' } },
                  ':)'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                CardDescription,
                { color: color },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'em',
                    null,
                    'Adamant'
                  ),
                  ' - If at least three green mana was spent to cast this spell, Garenbrig Paladin enters the battlefiled with a +1/+1 coutner on it.'
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  null,
                  "Garenbrig Paladin can't be blocked by creatures with power 2 or less"
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  CardPower,
                  { color: color },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'strong',
                    null,
                    '4/4'
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              CardExtra,
              null,
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                CardArtist,
                null
              )
            )
          )
        }
      ;(MagicCard.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MagicCard',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/fun/MagicCard/MagicCard.jsx'] = {
            name: 'MagicCard',
            docgenInfo: MagicCard.__docgenInfo,
            path: 'src/fun/MagicCard/MagicCard.jsx',
          })
    },
    351: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = ''
    },
    352: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = ''
    },
    353: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a =
        "# Grid 🍱\r\n\r\n## Usage\r\n\r\nIt's [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) but in a React component. This component should be used when creating a grid layout. It should not be used in place of Flex, but along with. Some examples would be designing a basic layout for a web page, smaller components like reviews etc.\r\n\r\n### `<Grid />`\r\n\r\nGrid is the container component for building a layout. Here you will set the columns, rows, alignment, spacing, etc.\r\n\r\n| Param           | Type    | Default Value | Required? | Description                                                                                                                                                |\r\n| --------------- | ------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| isInline        | Boolean | false         | no        | set to true to use inline-grid instead of grid                                                                                                             |\r\n| templateRows    | String  |               | no        | Row layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)                                                                 |\r\n| templateColumns | String  |               | no        | Column layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)                                                           |\r\n| autoRows        | String  |               | no        | Auto row layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)                                                                |\r\n| autoColumns     | String  |               | no        | Auto column layout [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)                                                          |\r\n| autoFlow        | String  |               | no        | Defines how rows/columns should be fit, Options are 'dense', 'rows', 'columns' [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) |\r\n| templateAreas   | Array   |               | no        | Define areas [see here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)                                                              |\r\n| columnGap       | Number  |               | no        | Defines column gap width. Uses spacing scale                                                                                                               |\r\n| rowGap          | Number  |               | no        | Defines row gap width. Uses spacing scale                                                                                                                  |\r\n| gap             | Number  |               | no        | Defines gap for row and columns. Uses spacing scale                                                                                                        |\r\n| justifyItems    | String  |               | no        | Horizontal alignment for grid items. Options are 'start', 'end', 'center', 'stretch'                                                                       |\r\n| alignItems      | String  |               | no        | Vertical alignment for grid items. Options are 'start', 'end', 'center', 'stretch'                                                                         |\r\n| justifyContent  | String  |               | no        | Horizontal alignment for grid container. Options are 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'                  |\r\n| alignContent    | String  |               | no        | Vertical alignment for grid container. Options are 'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'                    |\r\n\r\n### `<Grid.Item />`\r\n\r\nGrid.Item must always be nested within the Grid component. This is where you will add the content that will be a grid node. You can also specify alignment, and area.\r\n\r\n| Param       | Type   | Default Value | Required? | Description                                                                          |\r\n| ----------- | ------ | ------------- | --------- | ------------------------------------------------------------------------------------ |\r\n| column      | String |               | no        | Defines column start / column end                                                    |\r\n| row         | String |               | no        | Defines row start / row end                                                          |\r\n| area        | String |               | no        | Sets the area if there is a defined grid-template-area                               |\r\n| justifySelf | String |               | no        | Horizontal alignment for grid items. Options are 'start', 'end', 'center', 'stretch' |\r\n| alignSelf   | String |               | no        | Vertical alignment for grid items. Options are 'start', 'end', 'center', 'stretch'   |\r\n\r\n## Grid Extras\r\n\r\nThere are several additional grid functions that allow the use of fraction, min-content, max-content, auto-fill, etc.\r\n\r\n### Grid.space\r\n\r\nFormats a number to use our scaling system.\r\n`Grid.space(4) === 1rem`\r\n\r\n### Grid.fr\r\n\r\nSimilar to Grid.space but formats the number to use fr\r\n`Grid.fr(1) === 1fr`\r\n\r\n### Grid.repeat\r\n\r\nReturns a string to use repeat when defining rows/columns.\r\n`Grid.repeat(2, Grid.fr(4)) === repeat(2, 4fr)`\r\n\r\n### Grid.minMax\r\n\r\nSimilar to Grid.repeat but for minMax. Sets the minimum/maximum space a grid item can take\r\n`Grid.minMax(3, 5) === minmax(3, 5)`\r\n\r\n### Grid.minContent\r\n\r\nReturns min-content. Used for using the minimum width possible for grid items\r\n\r\n### Grid.maxContent\r\n\r\nThe opposite of min-content. Allows grid item to take up the maximum width for grid items\r\n\r\n## Grid.autoFill\r\n\r\nAllows grid items to fill automatically based off of specific rules.\r\n\r\n## Example\r\n\r\n```React\r\n<Grid\r\n  isInline\r\n  templateColumns={Grid.repeat(3, Grid.fr(1))\r\n  gap={4}}\r\n  justifyItems=\"center\"\r\n  templateAreas={\r\n    [\r\n      \"header header header\",\r\n      \"content content aside\",\r\n      \"content content aside\",\r\n      \"footer footer footer\"\r\n    ]\r\n  }\r\n>\r\n  <Grid.Item justifySelf=\"center\" area=\"header\">{HeaderContent}</Grid.Item>\r\n  <Grid.Item area=\"aside\">{AsideContent}</Grid.Item>\r\n  <Grid.Item area=\"footer\">{FooterContent}</Grid.Item>\r\n</Grid>\r\n```\r\n"
    },
    354: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a =
        '# Fonts ✍\n\n## Usage\n\nFonts can be used to further enhace readability in long paragraphs of text, or for heads that need to catch the users attention. Listed in the story are various links to the fonts used in warlock-ui.\nPlease not that the following fonts are free and can be found on google fonts. These fonts include:\n\n**Sans-serif**\n\n1. Roboto\n2. Source Sans\n3. Open Sans\n4. Inter\n5. Lato\n\n**Serif**\n\n1. Merriweather\n\n### Headlines\n\n1. Roboto\n\nYour goto for headlines and catching users attention.\n\n### Articles\n\n1. Source Sans\n2. Open Sans\n3. Merriweather\n\nUse these fonts for displaying large bodies of text. They are easier to read when close together.\n\n### Application UI\n\n1. Inter\n2. Roboto\n3. Source Sans\n4. Lato\n5. Open Sans\n\nUse these fonts for general application text. When it is neither a header nor a larg body of text.\nExamples would be Button/Input text.\n'
    },
    355: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a =
        '# Text 📱\r\n\r\n## Usage\r\n\r\nText is for containing any and all text! Use this component whenever you need to manipulate font-sizes, weights, color, style, etc.\r\n\r\nSee sizing from Design System\r\n\r\n## Params\r\n\r\n| Param     | Type    | Default Value | Required? | Description                     |\r\n| --------- | ------- | ------------- | --------- | ------------------------------- |\r\n| size      | number  | 3             | no        | font size, can be between 1-11. |\r\n| isBold    | boolean | false         | no        | Makes the text **Bold**         |\r\n| isItalics | boolean | false         | no        | Changes text to _italics_       |\r\n| color     | string  | black         | no        | Changes the color palette       |\r\n| shade     | number  | 1             | no        | Changes the shade               |\r\n\r\n_Note:_ You can pass any additional props to text as it will be passed to the text object itself\r\n\r\n## Example\r\n\r\n```react\r\n<Text size={5} isBold color="purple" shade={3}>\r\n  I\'m some pretty big text!\r\n</Text>\r\n```\r\n'
    },
    359: function(module, exports, __webpack_require__) {
      __webpack_require__(360),
        __webpack_require__(532),
        (module.exports = __webpack_require__(533))
    },
    434: function(module, exports) {},
    533: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4
            ),
            storybook_readme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              333
            ),
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              334
            ),
            _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(215),
            loadFonts = function loadFonts(stylesheet) {
              var link = document.createElement('link')
              link.setAttribute('rel', 'stylesheet'),
                link.setAttribute('type', 'text/css'),
                link.setAttribute('href', stylesheet),
                document.getElementsByTagName('head')[0].appendChild(link)
            }
          loadFonts(
            'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'
          ),
            loadFonts(
              'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap'
            ),
            loadFonts(
              'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
            ),
            loadFonts(
              'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap'
            ),
            loadFonts(
              'https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'
            ),
            loadFonts(
              'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap'
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({
            options: {},
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              function ProvideTheme(storyFn) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_theme__WEBPACK_IMPORTED_MODULE_5__.b,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _src_theme__WEBPACK_IMPORTED_MODULE_5__.a,
                    null
                  ),
                  ' ',
                  storyFn(),
                  ' '
                )
              }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_4__.withA11y
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              storybook_readme__WEBPACK_IMPORTED_MODULE_3__.addReadme
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(
              function loadStories() {
                var req = __webpack_require__(786)
                req.keys().forEach(function(filename) {
                  return req(filename)
                })
              },
              module
            )
        }.call(this, __webpack_require__(27)(module))
    },
    62: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return textContrast
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return color
        })
      var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          35
        ),
        textContrast = function textContrast(hsl) {
          var _hslToRgb = (function hslToRgb(hsl) {
              var separated = hsl.indexOf(',') > -1 ? ',' : ' ',
                splitHsl = hsl
                  .substr(4)
                  .split(')')[0]
                  .split(separated),
                hue = splitHsl[0],
                saturation =
                  splitHsl[1].substr(0, splitHsl[1].length - 1) / 100,
                lightness = splitHsl[2].substr(0, splitHsl[2].length - 1) / 100
              hue.indexOf('deg') > -1
                ? (hue = hue.substr(0, hue.length - 3))
                : hue.indexOf('rad') > -1
                ? (hue = Math.round(
                    hue.substr(0, hue.length - 3) * (180 / Math.PI)
                  ))
                : hue.indexOf('turn') > -1 &&
                  (hue = Math.round(360 * hue.substr(0, hue.length - 4))),
                hue >= 360 && (hue %= 360)
              var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation,
                x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1)),
                matchLightness = lightness - chroma / 2,
                r = 0,
                g = 0,
                b = 0
              return (
                0 <= hue && hue < 60
                  ? ((r = chroma), (g = x), (b = 0))
                  : 60 <= hue && hue < 120
                  ? ((r = x), (g = chroma), (b = 0))
                  : 120 <= hue && hue < 180
                  ? ((r = 0), (g = chroma), (b = x))
                  : 180 <= hue && hue < 240
                  ? ((r = 0), (g = x), (b = chroma))
                  : 240 <= hue && hue < 300
                  ? ((r = x), (g = 0), (b = chroma))
                  : 300 <= hue && hue < 360 && ((r = chroma), (g = 0), (b = x)),
                [
                  (r = Math.round(255 * (r + matchLightness))),
                  (g = Math.round(255 * (g + matchLightness))),
                  (b = Math.round(255 * (b + matchLightness))),
                ]
              )
            })(hsl),
            _hslToRgb2 = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a
            )(_hslToRgb, 3),
            r = _hslToRgb2[0],
            g = _hslToRgb2[1],
            b = _hslToRgb2[2]
          return Math.round(
            (299 * parseInt(r) + 587 * parseInt(g) + 114 * parseInt(b)) / 1e3
          ) > 125
            ? 'black'
            : 'white'
        },
        color = {
          red: {
            1: 'hsl(360, 100%, 97%)',
            2: 'hsl(360, 82%, 89%)',
            3: 'hsl(360, 77%, 78%)',
            4: 'hsl(360, 71%, 66%)',
            5: 'hsl(360, 64%, 55%)',
            6: 'hsl(360, 67%, 44%)',
            7: 'hsl(360, 72%, 38%)',
            8: 'hsl(360, 79%, 32%)',
            9: 'hsl(360, 85%, 25%)',
            10: 'hsl(360, 92%, 20%)',
          },
          redVivid: {
            1: 'hsl(360, 100%, 95%)',
            2: 'hsl(360, 100%, 87%)',
            3: 'hsl(360, 100%, 80%)',
            4: 'hsl(360, 91%, 69%)',
            5: 'hsl(360, 83%, 62%)',
            6: 'hsl(356, 75%, 53%)',
            7: 'hsl(354, 85%, 44%)',
            8: 'hsl(352, 90%, 35%)',
            9: 'hsl(350, 94%, 28%)',
            10: 'hsl(360, 94%, 20%)',
          },
          orange: {
            1: 'hsl(22, 100%, 95%)',
            2: 'hsl(22, 100%, 86%)',
            3: 'hsl(22, 92%, 76%)',
            4: 'hsl(21, 83%, 64%)',
            5: 'hsl(22, 78%, 55%)',
            6: 'hsl(22, 71%, 45%)',
            7: 'hsl(22, 74%, 38%)',
            8: 'hsl(22, 79%, 31%)',
            9: 'hsl(22, 80%, 26%)',
            10: 'hsl(22, 83%, 19%)',
          },
          orangeVivid: {
            1: 'hsl(24, 100%, 93%)',
            2: 'hsl(22, 100%, 85%)',
            3: 'hsl(20, 100%, 77%)',
            4: 'hsl(18, 100%, 70%)',
            5: 'hsl(16, 94%, 61%)',
            6: 'hsl(14, 89%, 55%)',
            7: 'hsl(12, 86%, 47%)',
            8: 'hsl(10, 93%, 40%)',
            9: 'hsl(8, 92%, 35%)',
            10: 'hsl(6, 96%, 26%)',
          },
          yellow: {
            1: 'hsl(45, 100%, 96%)',
            2: 'hsl(45, 90%, 88%)',
            3: 'hsl(45, 86%, 81%)',
            4: 'hsl(43, 90%, 76%)',
            5: 'hsl(43, 89%, 70%)',
            6: 'hsl(42, 78%, 60%)',
            7: 'hsl(42, 63%, 48%)',
            8: 'hsl(43, 72%, 37%)',
            9: 'hsl(43, 77%, 27%)',
            10: 'hsl(43, 86%, 17%)',
          },
          yellowVivid: {
            1: 'hsl(49, 100%, 96%)',
            2: 'hsl(48, 100%, 88%)',
            3: 'hsl(48, 95%, 76%)',
            4: 'hsl(48, 94%, 68%)',
            5: 'hsl(44, 92%, 63%)',
            6: 'hsl(42, 87%, 55%)',
            7: 'hsl(36, 77%, 49%)',
            8: 'hsl(29, 80%, 44%)',
            9: 'hsl(22, 82%, 39%)',
            10: 'hsl(15, 86%, 30%)',
          },
          lime: {
            1: 'hsl(83, 188%, 94%)',
            2: 'hsl(84, 77%, 86%)',
            3: 'hsl(83, 68%, 74%)',
            4: 'hsl(83, 63%, 61%)',
            5: 'hsl(83, 55%, 52%)',
            6: 'hsl(83, 64%, 42%)',
            7: 'hsl(83, 70%, 33%)',
            8: 'hsl(83, 74%, 27%)',
            9: 'hsl(81, 78%, 21%)',
            10: 'hsl(81, 86%, 14%)',
          },
          limeVivid: {
            1: 'hsl(83, 100%, 96%)',
            2: 'hsl(83, 100%, 87%)',
            3: 'hsl(86, 100%, 76%)',
            4: 'hsl(88, 91%, 66%)',
            5: 'hsl(90, 84%, 55%)',
            6: 'hsl(92, 86%, 45%)',
            7: 'hsl(92, 89%, 38%)',
            8: 'hsl(100, 89%, 31%)',
            9: 'hsl(99, 91%, 25%)',
            10: 'hsl(100, 93%, 17%)',
          },
          green: {
            1: 'hsl(125, 65%, 93%)',
            2: 'hsl(126, 49%, 84%)',
            3: 'hsl(122, 42%, 75%)',
            4: 'hsl(123, 38%, 63%)',
            5: 'hsl(123, 35%, 51%)',
            6: 'hsl(122, 39%, 41%)',
            7: 'hsl(122, 47%, 35%)',
            8: 'hsl(125, 56%, 29%)',
            9: 'hsl(125, 73%, 20%)',
            10: 'hsl(125, 986%, 14%)',
          },
          greenVivid: {
            1: 'hsl(125, 65%, 93%)',
            2: 'hsl(127, 65%, 85%)',
            3: 'hsl(124, 63%, 74%)',
            4: 'hsl(123, 53%, 55%)',
            5: 'hsl(123, 57%, 45%)',
            6: 'hsl(122, 73%, 35%)',
            7: 'hsl(122, 80%, 29%)',
            8: 'hsl(125, 79%, 26%)',
            9: 'hsl(125, 86%, 20%)',
            10: 'hsl(125, 97%, 14%)',
          },
          teal: {
            1: 'hsl(152, 68%, 96%)',
            2: 'hsl(154, 75%, 87%)',
            3: 'hsl(156, 73%, 74%)',
            4: 'hsl(158, 58%, 62%)',
            5: 'hsl(160, 51%, 49%)',
            6: 'hsl(162, 63%, 41%)',
            7: 'hsl(164, 71%, 34%)',
            8: 'hsl(166, 72%, 28%)',
            9: 'hsl(168, 80%, 23%)',
            10: 'hsl(170, 97%, 15%)',
          },
          tealVivid: {
            1: 'hsl(165, 67%, 96%)',
            2: 'hsl(163, 75%, 87%)',
            3: 'hsl(162, 73%, 74%)',
            4: 'hsl(164, 70%, 63%)',
            5: 'hsl(166, 64%, 49%)',
            6: 'hsl(168, 78%, 41%)',
            7: 'hsl(170, 91%, 32%)',
            8: 'hsl(172, 94%, 26%)',
            9: 'hsl(172, 98%, 20%)',
            10: 'hsl(176, 100%, 13%)',
          },
          cyan: {
            1: 'hsl(186, 100%, 94%)',
            2: 'hsl(185, 94%, 87%)',
            3: 'hsl(184, 80%, 74%)',
            4: 'hsl(184, 65%, 59%)',
            5: 'hsl(185, 57%, 50%)',
            6: 'hsl(185, 62%, 45%)',
            7: 'hsl(184, 77%, 34%)',
            8: 'hsl(185, 81%, 29%)',
            9: 'hsl(185, 84%, 25%)',
            10: 'hsl(184, 91%, 17%)',
          },
          cyanVivid: {
            1: 'hsl(171, 82%, 94%)',
            2: 'hsl(172, 97%, 88%)',
            3: 'hsl(174, 96%, 78%)',
            4: 'hsl(176, 87%, 67%)',
            5: 'hsl(178, 78%, 57%)',
            6: 'hsl(180, 77%, 47%)',
            7: 'hsl(182, 85%, 39%)',
            8: 'hsl(184, 90%, 34%)',
            9: 'hsl(186, 91%, 29%)',
            10: 'hsl(188, 91%, 23%)',
          },
          lightBlue: {
            1: 'hsl(201, 100%, 96%)',
            2: 'hsl(200, 88%, 90%)',
            3: 'hsl(200, 71%, 80%)',
            4: 'hsl(200, 66%, 69%)',
            5: 'hsl(200, 60%, 58%)',
            6: 'hsl(200, 54%, 49%)',
            7: 'hsl(200, 59%, 43%)',
            8: 'hsl(200, 68%, 35%)',
            9: 'hsl(200, 72%, 31%)',
            10: 'hsl(200, 82%, 24%)',
          },
          LightBlueVivid: {
            1: 'hsl(195, 100%, 95%)',
            2: 'hsl(195, 100%, 85%)',
            3: 'hsl(195, 97%, 75%)',
            4: 'hsl(196, 94%, 67%)',
            5: 'hsl(197, 92%, 61%)',
            6: 'hsl(199, 84%, 55%)',
            7: 'hsl(201, 79%, 46%)',
            8: 'hsl(202, 83%, 41%)',
            9: 'hsl(203, 87%, 34%)',
            10: 'hsl(204, 96%, 27%)',
          },
          blue: {
            1: 'hsl(205, 79%, 92%)',
            2: 'hsl(205, 97%, 85%)',
            3: 'hsl(205, 84%, 74%)',
            4: 'hsl(205, 74%, 65%)',
            5: 'hsl(205, 65%, 55%)',
            6: 'hsl(205, 67%, 45%)',
            7: 'hsl(205, 76%, 39%)',
            8: 'hsl(205, 82%, 33%)',
            9: 'hsl(205, 87%, 29%)',
            10: 'hsl(205, 100%, 21%)',
          },
          blueVivid: {
            1: 'hsl(202, 100%, 95%)',
            2: 'hsl(204, 100%, 86%)',
            3: 'hsl(206, 93%, 73%)',
            4: 'hsl(208, 88%, 62%)',
            5: 'hsl(210, 83%, 53%)',
            6: 'hsl(212, 92%, 43%)',
            7: 'hsl(214, 95%, 36%)',
            8: 'hsl(215, 96%, 32%)',
            9: 'hsl(216, 98%, 25%)',
            10: 'hsl(218, 100%, 17%)',
          },
          indigo: {
            1: 'hsl(221, 68%, 93%)',
            2: 'hsl(221, 78%, 86%)',
            3: 'hsl(224, 67%, 76%)',
            4: 'hsl(225, 57%, 67%)',
            5: 'hsl(227, 50%, 59%)',
            6: 'hsl(227, 42%, 51%)',
            7: 'hsl(228, 45%, 45%)',
            8: 'hsl(230, 49%, 41%)',
            9: 'hsl(232, 51%, 36%)',
            10: 'hsl(234, 62%, 26%)',
          },
          indigoVivid: {
            1: 'hsl(216, 100%, 93%)',
            2: 'hsl(216, 100%, 85%)',
            3: 'hsl(219, 95%, 76%)',
            4: 'hsl(222, 81%, 65%)',
            5: 'hsl(224, 69%, 54%)',
            6: 'hsl(223, 71%, 47%)',
            7: 'hsl(228, 74%, 43%)',
            8: 'hsl(230, 80%, 38%)',
            9: 'hsl(232, 86%, 32%)',
            10: 'hsl(234, 90%, 25%)',
          },
          purple: {
            1: 'hsl(262, 61%, 93%)',
            2: 'hsl(261, 68%, 84%)',
            3: 'hsl(261, 54%, 68%)',
            4: 'hsl(261, 47%, 58%)',
            5: 'hsl(262, 43%, 51%)',
            6: 'hsl(262, 48%, 46%)',
            7: 'hsl(262, 60%, 38%)',
            8: 'hsl(262, 69%, 31%)',
            9: 'hsl(262, 72%, 25%)',
            10: 'hsl(263, 85%, 18%)',
          },
          purpleVivid: {
            1: 'hsl(262, 90%, 96%)',
            2: 'hsl(262, 100%, 88%)',
            3: 'hsl(262, 100%, 78%)',
            4: 'hsl(264, 96%, 70%)',
            5: 'hsl(268, 82%, 60%)',
            6: 'hsl(273, 80%, 49%)',
            7: 'hsl(274, 87%, 43%)',
            8: 'hsl(274, 87%, 37%)',
            9: 'hsl(274, 87%, 31%)',
            10: 'hsl(276, 91%, 23%)',
          },
          magenta: {
            1: 'hsl(295, 58%, 93%)',
            2: 'hsl(293, 67%, 85%)',
            3: 'hsl(293, 54%, 68%)',
            4: 'hsl(293, 48%, 58%)',
            5: 'hsl(294, 43%, 51%)',
            6: 'hsl(294, 48%, 46%)',
            7: 'hsl(294, 60%, 38%)',
            8: 'hsl(294, 68%, 32%)',
            9: 'hsl(294, 72%, 25%)',
            10: 'hsl(295, 84%, 18%)',
          },
          magentaVivid: {
            1: 'hsl(294, 100%, 96%)',
            2: 'hsl(294, 97%, 88%)',
            3: 'hsl(294, 100%, 78%)',
            4: 'hsl(296, 96%, 70%)',
            5: 'hsl(300, 82%, 60%)',
            6: 'hsl(305, 80%, 49%)',
            7: 'hsl(306, 85%, 43%)',
            8: 'hsl(306, 88%, 37%)',
            9: 'hsl(306, 90%, 31%)',
            10: 'hsl(308, 91%, 23%)',
          },
          pink: {
            1: 'hsl(329, 100%, 94%)',
            2: 'hsl(330, 87%, 85%)',
            3: 'hsl(330, 77%, 76%)',
            4: 'hsl(330, 72%, 65%)',
            5: 'hsl(330, 66%, 57%)',
            6: 'hsl(330, 63%, 47%)',
            7: 'hsl(330, 68%, 40%)',
            8: 'hsl(330, 70%, 36%)',
            9: 'hsl(331, 74%, 27%)',
            10: 'hsl(330, 79%, 20%)',
          },
          pinkVivid: {
            1: 'hsl(341, 100%, 95%)',
            2: 'hsl(338, 100%, 86%)',
            3: 'hsl(336, 100%, 77%)',
            4: 'hsl(334, 86%, 67%)',
            5: 'hsl(330, 79%, 56%)',
            6: 'hsl(328, 85%, 46%)',
            7: 'hsl(326, 90%, 39%)',
            8: 'hsl(324, 93%, 33%)',
            9: 'hsl(322, 93%, 27%)',
            10: 'hsl(320, 100%, 19%)',
          },
          blueGrey: {
            1: 'hsl(210, 36%, 96%)',
            2: 'hsl(212, 33%, 89%)',
            3: 'hsl(210, 31%, 80%)',
            4: 'hsl(211, 27%, 70%)',
            5: 'hsl(209, 23%, 60%)',
            6: 'hsl(210, 22%, 49%)',
            7: 'hsl(209, 28%, 39%)',
            8: 'hsl(209, 34%, 30%)',
            9: 'hsl(211, 39%, 23%)',
            10: 'hsl(209, 61%, 16%)',
          },
          coolGrey: {
            1: 'hsl(216, 33%, 97%)',
            2: 'hsl(214, 15%, 91%)',
            3: 'hsl(210, 16%, 82%)',
            4: 'hsl(211, 13%, 65%)',
            5: 'hsl(211, 10%, 53%)',
            6: 'hsl(211, 12%, 43%)',
            7: 'hsl(209, 14%, 37%)',
            8: 'hsl(209, 18%, 30%)',
            9: 'hsl(209, 20%, 25%)',
            10: 'hsl(210, 24%, 16%)',
          },
          grey: {
            1: 'hsl(0, 0%, 97%)',
            2: 'hsl(0, 0%, 88%)',
            3: 'hsl(0, 0%, 81%)',
            4: 'hsl(0, 0%, 69%)',
            5: 'hsl(0, 0%, 62%)',
            6: 'hsl(0, 0%, 49%)',
            7: 'hsl(0, 0%, 38%)',
            8: 'hsl(0, 0%, 32%)',
            9: 'hsl(0, 0%, 23%)',
            10: 'hsl(0, 0%, 13%)',
          },
          warmGrey: {
            1: 'hsl(40, 23%, 97%)',
            2: 'hsl(43, 13%, 90%)',
            3: 'hsl(40, 15%, 80%)',
            4: 'hsl(39, 11%, 69%)',
            5: 'hsl(41, 8%, 61%)',
            6: 'hsl(41, 8%, 48%)',
            7: 'hsl(41, 9%, 35%)',
            8: 'hsl(37, 11%, 28%)',
            9: 'hsl(40, 13%, 23%)',
            10: 'hsl(42, 15%, 13%)',
          },
        }
    },
    786: function(module, exports, __webpack_require__) {
      var map = {
        './components/Disclosure/Disclosure.story.js': 787,
        './components/Fallback/Fallback.story.js': 788,
        './components/FlipCard/FlipCard.story.jsx': 789,
        './components/magicCard/SimpleCard.story.jsx': 790,
        './designSystem/color/color.story.js': 791,
        './designSystem/spacing/Spacing.story.js': 792,
        './elements/Button/Button.story.jsx': 793,
        './elements/Divider/Divider.story.js': 794,
        './elements/Image/Image.story.js': 795,
        './form/form/Form.story.jsx': 796,
        './form/input/Input.story.jsx': 797,
        './fun/MagicCard/MagicCard.story.jsx': 798,
        './layout/Container/Container.story.jsx': 799,
        './layout/Flex/Flex.story.js': 800,
        './layout/Grid/Grid.story.js': 801,
        './typography/Fonts/fonts.story.jsx': 802,
        './typography/Text/Text.story.jsx': 803,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 786)
    },
    787: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _Disclosure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338),
            _Disclosure_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              339
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Components',
            module
          )
            .addParameters({
              readme: {
                sidebar: _Disclosure_md__WEBPACK_IMPORTED_MODULE_3__.a,
              },
            })
            .add('Disclosure', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Disclosure__WEBPACK_IMPORTED_MODULE_2__.a,
                { title: 'Click me to reveal content!' },
                "I'm content that is hidden within the disclosure!"
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    788: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _Fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(340),
            _Fallback_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(341)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Components',
            module
          )
            .addParameters({
              readme: { sidebar: _Fallback_md__WEBPACK_IMPORTED_MODULE_3__.a },
            })
            .add('Fallback', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Fallback__WEBPACK_IMPORTED_MODULE_2__.a,
                {
                  image:
                    'https://media.istockphoto.com/vectors/summer-background-beautiful-tropical-seashore-full-of-the-sunlight-vector-id1207447728',
                  message: 'You might be lost!',
                  imageAlt: 'Some beach',
                },
                "I'm here for additional actions.",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  null,
                  'Click me to go back and view other stuff!'
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    789: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4
            ),
            _FlipCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155),
            _FlipCard_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              342
            ),
            flipOptions = { horizontal: 'horizontal', vertical: 'vertical' }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Components',
            module
          )
            .addParameters({
              readme: { sidebar: _FlipCard_md__WEBPACK_IMPORTED_MODULE_4__.a },
            })
            .add('FlipCard', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  style: {
                    height: '10rem',
                    width: '10rem',
                    margin: '1rem 0 0 1rem',
                  },
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _FlipCard__WEBPACK_IMPORTED_MODULE_3__.b,
                  {
                    flipDirection: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                    )('Flip Direction', flipOptions, 'horizontal'),
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _FlipCard__WEBPACK_IMPORTED_MODULE_3__.a,
                    { side: 'front', backgroundColor: 'lightblue' },
                    'Click me to flip!'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _FlipCard__WEBPACK_IMPORTED_MODULE_3__.a,
                    { side: 'back', backgroundColor: 'lightgreen' },
                    'Wow there is a full other side here!'
                  )
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    790: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _SimpleCard__WEBPACK_IMPORTED_MODULE_3__ =
              (__webpack_require__(4), __webpack_require__(343))
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Components',
            module
          ).add('SimpleCard', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {
                style: {
                  backgroundColor: '#fff',
                  height: '100vh',
                  widht: '100vw',
                  marginTop: '-1rem',
                  padding: '1rem',
                },
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _SimpleCard__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              )
            )
          })
        }.call(this, __webpack_require__(27)(module))
    },
    791: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              6
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11),
            _elements_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              344
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              7
            ),
            _theme_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62)
          function _templateObject2() {
            var data = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
            )([
              '\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 100%;\n  grid-gap: ',
              ';\n  justify-items: center;\n  align-items: center;\n',
            ])
            return (
              (_templateObject2 = function _templateObject2() {
                return data
              }),
              data
            )
          }
          function _templateObject() {
            var data = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
            )([
              '\n  font-size: ',
              ';\n  text-align: center;\n  font-weight: bold;\n',
            ])
            return (
              (_templateObject = function _templateObject() {
                return data
              }),
              data
            )
          }
          var colors = Object.keys(_theme_color__WEBPACK_IMPORTED_MODULE_6__.a),
            ColorSwatch = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
              {
                displayName: 'colorstory__ColorSwatch',
                componentId: 'sc-1hq6w7z-0',
              }
            )(function(_ref) {
              var theme = _ref.theme,
                color = _ref.color,
                variant = _ref.variant
              return {
                background: theme.color[color][variant],
                width: theme.spaceScale(10),
                height: theme.spaceScale(8),
                borderRadius: theme.spaceScale(1),
                color: theme.textContrast(theme.color[color][variant]),
              }
            }),
            ColorVariant = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.p.withConfig(
              {
                displayName: 'colorstory__ColorVariant',
                componentId: 'sc-1hq6w7z-1',
              }
            )(_templateObject(), function(_ref2) {
              return _ref2.theme.fontScale(1)
            }),
            SwatchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
              {
                displayName: 'colorstory__SwatchContainer',
                componentId: 'sc-1hq6w7z-2',
              }
            )(_templateObject2(), function(_ref3) {
              return _ref3.theme.spaceScale(1)
            })
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)(
            'Design System',
            module
          ).add('Color', function() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
              null,
              colors.map(function(color) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _typography__WEBPACK_IMPORTED_MODULE_3__.a,
                    { size: 7 },
                    'Color: ',
                    color
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _elements_Divider__WEBPACK_IMPORTED_MODULE_4__.a,
                    null
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    SwatchContainer,
                    null,
                    Object.keys(
                      _theme_color__WEBPACK_IMPORTED_MODULE_6__.a[color]
                    ).map(function(variant) {
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'div',
                        { key: variant },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          ColorSwatch,
                          { color: color, variant: variant },
                          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            ColorVariant,
                            null,
                            _theme_color__WEBPACK_IMPORTED_MODULE_6__.a[color][
                              variant
                            ]
                          )
                        )
                      )
                    })
                  )
                )
              })
            )
          })
        }.call(this, __webpack_require__(27)(module))
    },
    792: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              6
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              7
            ),
            _theme_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              31
            ),
            _Spacing_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(345)
          function _templateObject() {
            var data = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
            )([
              '\n  width: ',
              ';\n  height: 2rem;\n  background-color: rebeccapurple;\n  margin-bottom: 1rem;\n',
            ])
            return (
              (_templateObject = function _templateObject() {
                return data
              }),
              data
            )
          }
          var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
              {
                displayName: 'Spacingstory__StyledBox',
                componentId: 'sc-15e282p-0',
              }
            )(_templateObject(), function(_ref) {
              var size = _ref.size
              return Object(_theme_spacing__WEBPACK_IMPORTED_MODULE_4__.b)(size)
            }),
            sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(
            'Design System',
            module
          )
            .addParameters({
              readme: { sidebar: _Spacing_md__WEBPACK_IMPORTED_MODULE_5__.a },
            })
            .add('Spacing', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                null,
                sizes.map(function(size) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                    null,
                    'Size: ',
                    Object(_theme_spacing__WEBPACK_IMPORTED_MODULE_4__.b)(size),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      StyledBox,
                      { size: size }
                    )
                  )
                })
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    793: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4
            ),
            _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24),
            _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(153),
            _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19),
            _Button_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(348),
            roundedOptions = {
              small: 'small',
              medium: 'medium',
              large: 'large',
              full: 'full',
              none: 'none',
            },
            variantOptions = {
              filled: 'filled',
              outline: 'outline',
              text: 'text',
            },
            sizeOptions = { small: 'small', medium: 'medium', large: 'large' },
            shadeOptions = { range: !0, min: 1, max: 10, step: 1 }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Elements',
            module
          )
            .addParameters({
              readme: { sidebar: _Button_md__WEBPACK_IMPORTED_MODULE_6__.a },
            })
            .add('Button', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { margin: '1rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    bubble: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                    )('Bubble', !0),
                    hover: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                    )('Hover', !1),
                    isDisabled: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                    )('Disabled', !1),
                    variant: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                    )('Variant', variantOptions, 'filled'),
                    size: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                    )('Size', sizeOptions, 'medium'),
                    rounded: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                    )('Rounded', roundedOptions, 'small'),
                    color: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                    )(
                      'Color',
                      _utils__WEBPACK_IMPORTED_MODULE_4__.a,
                      'magenta'
                    ),
                    shade: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number
                    )('Shade', 4, shadeOptions),
                    isFullwidth: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                    )('isFullwidth', !1),
                  },
                  'Click Me'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _layout__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    justifyItems: 'center',
                    alignContent: 'center',
                    templateAreas: ['small', 'medium', 'large'],
                    templateColumns: _layout__WEBPACK_IMPORTED_MODULE_5__.a.repeat(
                      3,
                      _layout__WEBPACK_IMPORTED_MODULE_5__.a.fr(1)
                    ),
                    templateRows: _layout__WEBPACK_IMPORTED_MODULE_5__.a.repeat(
                      4,
                      _layout__WEBPACK_IMPORTED_MODULE_5__.a.fr(1)
                    ),
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      { shade: 3, color: 'red' },
                      'Small'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      { shade: 3, size: 'medium', color: 'red' },
                      'Medium'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      { shade: 3, size: 'large', color: 'red' },
                      'Large'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      { hover: !0, variant: 'outline', color: 'green' },
                      'Small'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        hover: !0,
                        variant: 'outline',
                        size: 'medium',
                        color: 'green',
                      },
                      'Medium'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        hover: !0,
                        variant: 'outline',
                        size: 'large',
                        color: 'green',
                      },
                      'Large'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      { hover: !0, bubble: !1, variant: 'text', color: 'blue' },
                      'Small'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        hover: !0,
                        bubble: !1,
                        variant: 'text',
                        size: 'medium',
                        color: 'blue',
                      },
                      'Medium'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        hover: !0,
                        bubble: !1,
                        variant: 'text',
                        size: 'large',
                        color: 'blue',
                      },
                      'Large'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        isDisabled: !0,
                        hover: !0,
                        bubble: !1,
                        variant: 'text',
                        color: 'blue',
                      },
                      'Small'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        isDisabled: !0,
                        hover: !0,
                        bubble: !1,
                        variant: 'text',
                        size: 'medium',
                        color: 'blue',
                      },
                      'Medium'
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _layout__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                      {
                        isDisabled: !0,
                        hover: !0,
                        bubble: !1,
                        variant: 'text',
                        size: 'large',
                        color: 'blue',
                      },
                      'Large'
                    )
                  )
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    794: function(module, exports) {},
    795: function(module, exports) {},
    796: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92),
            _Form_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(349)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Form',
            module
          )
            .addParameters({
              readme: { sidebar: _Form_md__WEBPACK_IMPORTED_MODULE_3__.a },
            })
            .add('Form', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_2__.b,
                {
                  onSubmit: function submitForm(e) {
                    e.preventDefault()
                  },
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.c,
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.d,
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.b.Button,
                  null,
                  'Submit'
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    797: function(module, exports) {},
    798: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4
            ),
            _MagicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(350),
            colorCombos = {
              White: 'white',
              Blue: 'blue',
              Black: 'black',
              Red: 'red',
              Multi: 'multi',
              Artifact: 'artifact',
              'Blue-Black': 'blue-black',
              'Black-Green': 'black-green',
              'Blue-Red': 'blue-red',
              'White-Black': 'white-black',
              'Black-Red': 'black-red',
              'Green-White': 'green-white',
              'Green-Blue': 'green-blue',
              'White-Blue': 'white-blue',
              'Red-White': 'red-white',
              'Red-Green': 'red-green',
            }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Fun',
            module
          ).add('MagicCard', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _MagicCard__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  color: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                  )('Card Color', colorCombos, 'white'),
                }
              )
            )
          })
        }.call(this, __webpack_require__(27)(module))
    },
    799: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149),
            _Container_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              351
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Layout',
            module
          )
            .addParameters({
              readme: { sidebar: _Container_md__WEBPACK_IMPORTED_MODULE_3__.a },
            })
            .add('Container', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Container__WEBPACK_IMPORTED_MODULE_2__.a,
                { paddingVertical: 2 },
                'I & apos; m here for additional actions.',
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  null,
                  ' Click me to go back and view other stuff! '
                ),
                ' '
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    800: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            _Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150),
            _Flex_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(352)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Layout',
            module
          )
            .addParameters({
              readme: { sidebar: _Flex_md__WEBPACK_IMPORTED_MODULE_3__.a },
            })
            .add('Flex', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Flex__WEBPACK_IMPORTED_MODULE_2__.a,
                { direction: 'column' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '1'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '2'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '3'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '4'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '5'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  '6'
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    801: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              6
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              1
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              4
            ),
            _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25),
            _Grid_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(353)
          function _templateObject() {
            var data = Object(
              _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
            )([
              '\n  height: 5rem;\n  width: 100%;\n  background-color: rebeccapurple;\n  color: white;\n',
            ])
            return (
              (_templateObject = function _templateObject() {
                return data
              }),
              data
            )
          }
          var justifyAndAlignOptions = {
              start: 'start',
              end: 'end',
              center: 'center',
              stretch: 'stretch',
            },
            justifyAndAlignContent = {
              start: 'start',
              end: 'end',
              center: 'center',
              stretch: 'stretch',
              spaceAround: 'space-around',
              spaceBetween: 'space-between',
              spaceEvenly: 'space-evenly',
            },
            autoFlowOptions = { row: 'row', column: 'column', dense: 'dense' },
            GridBox = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div.withConfig(
              { displayName: 'Gridstory__GridBox', componentId: 'vz852a-0' }
            )(_templateObject())
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(
            'Layout',
            module
          )
            .addParameters({
              readme: { sidebar: _Grid_md__WEBPACK_IMPORTED_MODULE_6__.a },
            })
            .add('Grid', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  isInline: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean
                  )('isInline', !1),
                  gap: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number
                  )('gap', 4),
                  templateColumns: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text
                  )(
                    'templateColumns',
                    _Grid__WEBPACK_IMPORTED_MODULE_5__.a.repeat(
                      3,
                      _Grid__WEBPACK_IMPORTED_MODULE_5__.a.fr(1)
                    )
                  ),
                  templateRows: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text
                  )('templateRows', 'repeat(4, 1fr)'),
                  justifyItems: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                  )('justifyItems', justifyAndAlignOptions),
                  alignItems: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                  )('alignItems', justifyAndAlignOptions),
                  justifyContent: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                  )('justifyContent', justifyAndAlignContent),
                  alignContent: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                  )('justifyContent', justifyAndAlignContent),
                  autoFlow: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                  )('autoFlow', autoFlowOptions),
                  templateAreas: [
                    'header header header',
                    'content content aside',
                    'content content aside',
                    'footer footer footer',
                  ],
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  {
                    justifySelf: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                    )('justifySelf', justifyAndAlignOptions),
                    alignSelf: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select
                    )('alignSelf', justifyAndAlignOptions),
                    area: 'header',
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    'Header'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  { area: 'content' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    'Content'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  { area: 'aside' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    'Aside'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  { area: 'footer' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    'Footer'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '5'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '6'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '7'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '8'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '9'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Grid__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    GridBox,
                    null,
                    '10'
                  )
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    802: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              7
            ),
            ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11),
            _fonts_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(354)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography',
            module
          )
            .addParameters({
              readme: { sidebar: _fonts_md__WEBPACK_IMPORTED_MODULE_3__.a },
            })
            .add('Fonts', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { margin: '1rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { marginBottom: '1.5rem' } },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_2__.a,
                    { size: 4 },
                    'Include these links in your head Tag in order to use the font!'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 5, family: 'roboto' },
                  'Roboto:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'roboto', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'hr',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'source sans pro' },
                  'Source Sans Pro:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'source sans pro', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'hr',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'open sans' },
                  'Open Sans:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'open sans', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap" rel="stylesheet">'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'hr',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'merriweather' },
                  'Merriweather:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'merriweather', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap" rel="stylesheet">'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'hr',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'inter' },
                  'Inter:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'inter', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'hr',
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'lato' },
                  'Lato:'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 4, family: 'lato', spacing: 2 },
                  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_2__.a,
                  { size: 2 },
                  '<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap" rel="stylesheet">'
                )
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    803: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              43
            ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              7
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              4
            ),
            _theme_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              84
            ),
            _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113),
            _Text_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(355),
            _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(153),
            sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            sizeOptions = { range: !0, min: 1, max: 11, step: 1 },
            shadeOptions = { range: !0, min: 1, max: 10, step: 1 },
            weightOptions = { range: !0, min: 100, max: 900, step: 100 }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
            'Typography',
            module
          )
            .addParameters({
              readme: { sidebar: _Text_md__WEBPACK_IMPORTED_MODULE_6__.a },
            })
            .add('Text', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    family: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                    )('Font Family', ''),
                    weight: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Weight', 400, weightOptions),
                    lineHeight: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Line Height', 1),
                    spacing: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Letter Spacing', 1),
                    size: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Size', 4, sizeOptions),
                    isBold: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean
                    )('isBold', !1),
                    isItalics: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean
                    )('isItalics', !1),
                    color: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select
                    )(
                      'Color',
                      Object(
                        _home_kaemonlovendahl_code_warlock_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a
                      )(
                        { black: 'black' },
                        _utils__WEBPACK_IMPORTED_MODULE_7__.a
                      ),
                      'black'
                    ),
                    shade: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number
                    )('Shade', 10, shadeOptions),
                  },
                  ' ',
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                  )('Content', 'You can edit me!'),
                  ' '
                ),
                ' ',
                sizes.map(function(size) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                      { size: size },
                      ' Size: ',
                      Object(_theme_typography__WEBPACK_IMPORTED_MODULE_4__.a)(
                        size
                      ),
                      ' '
                    ),
                    ' '
                  )
                }),
                ' '
              )
            })
        }.call(this, __webpack_require__(27)(module))
    },
    84: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return fontSizes
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return fontScale
        })
      var fontSizes = {
          1: 0.75,
          2: 0.875,
          3: 1,
          4: 1.125,
          5: 1.25,
          6: 1.5,
          7: 1.875,
          8: 2.25,
          9: 3,
          10: 3.75,
          11: 4.5,
        },
        fontScale = function fontScale() {
          var size =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 3,
            unit =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'rem'
          return ''.concat(fontSizes[size]).concat(unit)
        }
    },
    92: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Checkbox_Checkbox
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return Form_Form
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return Radio_Radio
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return Input_Input
        })
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Checkbox_Checkbox = function Checkbox() {
          return react_default.a.createElement('input', { type: 'checkbox' })
        }
      ;(Checkbox_Checkbox.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Checkbox',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/form/checkbox/Checkbox.jsx'] = {
            name: 'Checkbox',
            docgenInfo: Checkbox_Checkbox.__docgenInfo,
            path: 'src/form/checkbox/Checkbox.jsx',
          })
      var src_elements = __webpack_require__(154),
        StyledForm = __webpack_require__(1).d.form.withConfig({
          displayName: 'Form__StyledForm',
          componentId: 'l77d5k-0',
        })(function(_ref) {
          _ref.theme
        }),
        Form_Form = function Form(_ref2) {
          var children = _ref2.children,
            onSubmit = _ref2.onSubmit
          return react_default.a.createElement(
            StyledForm,
            { onSubmit: onSubmit },
            children
          )
        }
      ;(Form_Form.Button = function FormButton(_ref3) {
        var children = _ref3.children
        return react_default.a.createElement(
          src_elements.a,
          { color: 'blue', shade: 7, type: 'submit' },
          children
        )
      }),
        (Form_Form.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'Button',
              docblock: null,
              modifiers: ['static'],
              params: [{ name: '_ref3', type: null }],
              returns: null,
            },
          ],
          displayName: 'Form',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/form/form/Form.jsx'] = {
            name: 'Form',
            docgenInfo: Form_Form.__docgenInfo,
            path: 'src/form/form/Form.jsx',
          })
      var Radio_Radio = function Radio() {
        return react_default.a.createElement('input', { type: 'radio' })
      }
      ;(Radio_Radio.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Radio',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/form/radio/Radio.jsx'] = {
            name: 'Radio',
            docgenInfo: Radio_Radio.__docgenInfo,
            path: 'src/form/radio/Radio.jsx',
          })
      var Input_Input = function Input(_ref) {
        var labelName = _ref.labelName,
          labelFor = _ref.labelFor,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? 'text' : _ref$type
        return react_default.a.createElement(
          react_default.a.Fragment,
          null,
          react_default.a.createElement(
            'label',
            { htmlFor: labelFor },
            labelName
          ),
          react_default.a.createElement('input', { id: labelFor, type: type })
        )
      }
      ;(Input_Input.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Input',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/form/input/Input.jsx'] = {
            name: 'Input',
            docgenInfo: Input_Input.__docgenInfo,
            path: 'src/form/input/Input.jsx',
          })
    },
  },
  [[359, 1, 2]],
])
//# sourceMappingURL=main.755a33bb89b1a209e551.bundle.js.map
