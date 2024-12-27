!(function ($, window) {
  var LotusIcons = {
    insertIcons: function () {
      $('[data-lotus-icon]').each(function (index, el) {
        var key,
          value,
          $el = $(el),
          id = $el.attr('data-lotus-icon'),
          imgUrl =
            ((key = id),
            Object.keys(window.LotusConfig.icons).some(function (k) {
              return k === key
                ? ((value = window.LotusConfig.icons[k]), !0)
                : window.LotusConfig.icons[k] &&
                  'object' == typeof window.LotusConfig.icons[k]
                ? void 0 !==
                  (value = window.LotusConfig.icons.getValueByKey(
                    window.LotusConfig.icons[k],
                    key,
                  ))
                : void 0
            }),
            value)
        $el.attr('src', imgUrl)
        $el.attr('alt', `icon-${id}`)
      })
    },
  }
  ;(window.LotusIcons = LotusIcons),
    $(function () {
      LotusIcons.insertIcons()
    })
})(jQuery, window, document)
