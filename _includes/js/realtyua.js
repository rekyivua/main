"use strict"; $(document).ready(function(){$("body").tooltip({selector:'[data-toggle="tooltip"]'}),e('[data-toggle="popover"]').popover(); $('[data-toggle="popover"]').popover(); $('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); $('[data-toggle="popover"]').popover(); }); $(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } }); $(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); }); new TomSelect('#rehiony',{create:false,maxOptions:10,maxItems:1,valueField:'url',labelField:'title',searchField:'title',sortField:'title',options:[{%- for r in site.data.realestate -%}{%- if r.url == site.url and r.slug and r.slug != '' -%}{%- include select/0.html -%}{%- elsif r.slug and r.slug != '' and r.url contains 'https' -%}{%- assign d = r.url | remove: 'https://www.realestate.' | remove: '.ua' -%}{%- if site.data[d] -%}{%- for o in site.data[d] -%}{url:"{{ o.url }}",title:"{{ o.title }}"},{%- endfor -%}{%- endif -%}{%- else -%}{url:"{{ r.url }}",title:"{{ r.small }}"},{%- endif -%}{%- endfor -%}{url:"{{ site.url }}/region/{{ site.region_slug }}/",title:"{{ site.region }}"}],render:{no_results:function(data,escape){return '<div class="no-results">За цим запитом "' + escape(data.input) + '" нічого не знайдено</div>';}},onChange:function(value){if(value!==''){window.location = value;}}});}); var sShare = { show: function(url, windowHeight, windowWidth) { var height = windowHeight || 420; var width  = windowWidth || 550; var top  = (window.screen.height / 2) - (height / 2); var left = (window.screen.width / 2) - (width / 2); return window.open(url, 'share', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width='+ width +', height='+ height +', top='+ top +', left='+ left); }};
