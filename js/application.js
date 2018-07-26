const inlineSVGs = function() {
  $('img.js-load-svg').each(function() {
    var el = $(this);
    var url = el.attr('src');
    var _class = el.attr('class');

    $.get(url, function(data) {
      var svgEl = $(data).find('svg');
      if (typeof _class !== 'undefined') {
        svgEl = svgEl.attr('class', _class);
      }
      svgEl = svgEl.removeAttr('xmlns:a');
      el.replaceWith(svgEl);
    }, 'xml');
  });
}

$(inlineSVGs);
