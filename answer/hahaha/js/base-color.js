document.addEventListener('DOMContentLoaded', function(){
  var base1 = '#ff5500';  // 新しく設定したい色①  ※呼び出しclassはbase1 bg_base1 u_line_base1 box_t_base1 box_m_base1
  var base2 = '#ffcc22';  // 新しく設定したい色②  ※呼び出しclassはbase2 bg_base2 u_line_base2 box_t_base2 box_m_base2
  var base3 = '#ffffff';  // 新しく設定したい色③  ※呼び出しclassはbase3 bg_base3 u_line_base3 box_t_base3 box_m_base3
  var base4 = '#ffffff';  // 新しく設定したい色④  ※呼び出しclassはbase4 bg_base4 u_line_base4 box_t_base4 box_m_base4
  var base5 = '#ffffff';  // 新しく設定したい色⑤  ※呼び出しclassはbase5 bg_base5 u_line_base5 box_t_base5 box_m_base5
  var base = new Array(5);
  base[0] = base1;
  base[1] = base2;
  base[2] = base3;
  base[3] = base4;
  base[4] = base5;
  var css_txt = '';
  for (var i = 0; i < 5; i++) {
    if(base[i]){
      var val_1 = base[i].slice(-1);
      var val_16 = (base[i].slice(0, 6)).slice(-1);
      var val_256 = (base[i].slice(0, 5)).slice(-1);
      var val_4096 = (base[i].slice(0, 4)).slice(-1);
      var val_65536 = (base[i].slice(0, 3)).slice(-1);
      var val_1048576 = (base[i].slice(0, 2)).slice(-1);
switch (val_1){
  case 'a':
    val_1 = 10;
    break;
  case 'A':
    val_1 = 10;
    break;
  case 'b':
    val_1 = 11;
    break;
  case 'B':
    val_1 = 11;
    break;
  case 'c':
    val_1 = 12;
    break;
  case 'C':
    val_1 = 12;
    break;
  case 'd':
    val_1 = 13;
    break;
  case 'D':
    val_1 = 13;
    break;
  case 'e':
    val_1 = 14;
    break;
  case 'E':
    val_1 = 14;
    break;
  case 'f':
    val_1 = 15;
    break;
  case 'F':
    val_1 = 15;
    break;
}
switch (val_16){
  case 'a':
    val_16 = 10;
    break;
  case 'A':
    val_16 = 10;
    break;
  case 'b':
    val_16 = 11;
    break;
  case 'B':
    val_16 = 11;
    break;
  case 'c':
    val_16 = 12;
    break;
  case 'C':
    val_16 = 12;
    break;
  case 'd':
    val_16 = 13;
    break;
  case 'D':
    val_16 = 13;
    break;
  case 'e':
    val_16 = 14;
    break;
  case 'E':
    val_16 = 14;
    break;
  case 'f':
    val_16 = 15;
    break;
  case 'F':
    val_16 = 15;
    break;
}
switch (val_256){
  case 'a':
    val_256 = 10;
    break;
  case 'A':
    val_256 = 10;
    break;
  case 'b':
    val_256 = 11;
    break;
  case 'B':
    val_256 = 11;
    break;
  case 'c':
    val_256 = 12;
    break;
  case 'C':
    val_256 = 12;
    break;
  case 'd':
    val_256 = 13;
    break;
  case 'D':
    val_256 = 13;
    break;
  case 'e':
    val_256 = 14;
    break;
  case 'E':
    val_256 = 14;
    break;
  case 'f':
    val_256 = 15;
    break;
  case 'F':
    val_256 = 15;
    break;
}
switch (val_4096){
  case 'a':
    val_4096 = 10;
    break;
  case 'A':
    val_4096 = 10;
    break;
  case 'b':
    val_4096 = 11;
    break;
  case 'B':
    val_4096 = 11;
    break;
  case 'c':
    val_4096 = 12;
    break;
  case 'C':
    val_4096 = 12;
    break;
  case 'd':
    val_4096 = 13;
    break;
  case 'D':
    val_4096 = 13;
    break;
  case 'e':
    val_4096 = 14;
    break;
  case 'E':
    val_4096 = 14;
    break;
  case 'f':
    val_4096 = 15;
    break;
  case 'F':
    val_4096 = 15;
    break;
}
switch (val_65536){
  case 'a':
    val_65536 = 10;
    break;
  case 'A':
    val_65536 = 10;
    break;
  case 'b':
    val_65536 = 11;
    break;
  case 'B':
    val_65536 = 11;
    break;
  case 'c':
    val_65536 = 12;
    break;
  case 'C':
    val_65536 = 12;
    break;
  case 'd':
    val_65536 = 13;
    break;
  case 'D':
    val_65536 = 13;
    break;
  case 'e':
    val_65536 = 14;
    break;
  case 'E':
    val_65536 = 14;
    break;
  case 'f':
    val_65536 = 15;
    break;
  case 'F':
    val_65536 = 15;
    break;
}
switch (val_1048576){
  case 'a':
    val_1048576 = 10;
    break;
  case 'A':
    val_1048576 = 10;
    break;
  case 'b':
    val_1048576 = 11;
    break;
  case 'B':
    val_1048576 = 11;
    break;
  case 'c':
    val_1048576 = 12;
    break;
  case 'C':
    val_1048576 = 12;
    break;
  case 'd':
    val_1048576 = 13;
    break;
  case 'D':
    val_1048576 = 13;
    break;
  case 'e':
    val_1048576 = 14;
    break;
  case 'E':
    val_1048576 = 14;
    break;
  case 'f':
    val_1048576 = 15;
    break;
  case 'F':
    val_1048576 = 15;
    break;
}
      var val_baseir = parseInt(val_65536)*1 + parseInt(val_1048576)*16;
      var val_baseig = parseInt(val_256)*1 + parseInt(val_4096)*16;
      var val_baseib = parseInt(val_1)*1 + parseInt(val_16)*16;
      var val_basei_3r = parseInt(val_baseir) - (3*(1+16));
      var val_basei_3g = parseInt(val_baseig) - (3*(1+16));
      var val_basei_3b = parseInt(val_baseib) - (3*(1+16));
      var val_basei_2r = parseInt(val_baseir) - (1+16);
      var val_basei_2g = parseInt(val_baseig) - (1+16);
      var val_basei_2b = parseInt(val_baseib) - (1+16);
      var val_basei_1r = parseInt(val_baseir) + (1+16);
      var val_basei_1g = parseInt(val_baseig) + (1+16);
      var val_basei_1b = parseInt(val_baseib) + (1+16);
      var val_basei_3_1 = Math.floor(parseInt(val_basei_3r)/16);
      var val_basei_3_2 = Math.floor((parseInt(val_basei_3r)-(parseInt(val_basei_3_1)*16)));
      var val_basei_3_3 = Math.floor(parseInt(val_basei_3g)/16);
      var val_basei_3_4 = Math.floor((parseInt(val_basei_3g)-(parseInt(val_basei_3_3)*16)));
      var val_basei_3_5 = Math.floor(parseInt(val_basei_3b)/16);
      var val_basei_3_6 = Math.floor((parseInt(val_basei_3b)-(parseInt(val_basei_3_5)*16)));
      var val_basei_2_1 = Math.floor(parseInt(val_basei_2r)/16);
      var val_basei_2_2 = Math.floor((parseInt(val_basei_2r)-(parseInt(val_basei_2_1)*16)));
      var val_basei_2_3 = Math.floor(parseInt(val_basei_2g)/16);
      var val_basei_2_4 = Math.floor((parseInt(val_basei_2g)-(parseInt(val_basei_2_3)*16)));
      var val_basei_2_5 = Math.floor(parseInt(val_basei_2b)/16);
      var val_basei_2_6 = Math.floor((parseInt(val_basei_2b)-(parseInt(val_basei_2_5)*16)));
      var val_basei_1_1 = Math.floor(parseInt(val_basei_1r)/16);
      var val_basei_1_2 = Math.floor((parseInt(val_basei_1r)-(parseInt(val_basei_1_1)*16)));
      var val_basei_1_3 = Math.floor(parseInt(val_basei_1g)/16);
      var val_basei_1_4 = Math.floor((parseInt(val_basei_1g)-(parseInt(val_basei_1_3)*16)));
      var val_basei_1_5 = Math.floor(parseInt(val_basei_1b)/16);
      var val_basei_1_6 = Math.floor((parseInt(val_basei_1b)-(parseInt(val_basei_1_5)*16)));
      if(val_basei_3_2 < 0){val_basei_3_1 = val_basei_3_1-1;val_basei_3_2 = 15+val_basei_3_2;}
      if(val_basei_3_1 < 0){val_basei_3_1 = 0;val_basei_3_2 = 0;}
      if(val_basei_3_4 < 0){val_basei_3_3 = val_basei_3_3-1;val_basei_3_4 = 15+val_basei_3_4;}
      if(val_basei_3_3 < 0){val_basei_3_3 = 0;val_basei_3_4 = 0;}
      if(val_basei_3_6 < 0){val_basei_3_6 = val_basei_3_5-1;val_basei_3_6 = 15+val_basei_3_6;}
      if(val_basei_3_5 < 0){val_basei_3_5 = 0;val_basei_3_6 = 0;}
      if(val_basei_2_2 < 0){val_basei_2_1 = val_basei_2_1-1;val_basei_2_2 = 15+val_basei_2_2;}
      if(val_basei_2_1 < 0){val_basei_2_1 = 0;val_basei_2_2 = 0;}
      if(val_basei_2_4 < 0){val_basei_2_3 = val_basei_2_3-1;val_basei_2_4 = 15+val_basei_2_4;}
      if(val_basei_2_3 < 0){val_basei_2_3 = 0;val_basei_2_4 = 0;}
      if(val_basei_2_6 < 0){val_basei_2_6 = val_basei_2_5-1;val_basei_2_6 = 15+val_basei_2_6;}
      if(val_basei_2_5 < 0){val_basei_2_5 = 0;val_basei_2_6 = 0;}
      if(val_basei_1_2 < 0){val_basei_1_1 = val_basei_1_1-1;val_basei_1_2 = 15+val_basei_1_2;}
      if(val_basei_1_1 < 0){val_basei_1_1 = 0;val_basei_1_2 = 0;}
      if(val_basei_1_4 < 0){val_basei_1_3 = val_basei_1_3-1;val_basei_1_4 = 15+val_basei_1_4;}
      if(val_basei_1_3 < 0){val_basei_1_3 = 0;val_basei_1_4 = 0;}
      if(val_basei_1_6 < 0){val_basei_1_6 = val_basei_1_5-1;val_basei_1_6 = 15+val_basei_1_6;}
      if(val_basei_1_5 < 0){val_basei_1_5 = 0;val_basei_1_6 = 0;}
      if(val_basei_3_6 > 15){val_basei_3_5 = val_basei_3_5+1;val_basei_3_6 = 0;}
      if(val_basei_2_6 > 15){val_basei_2_5 = val_basei_2_5+1;val_basei_2_6 = 0;}
      if(val_basei_1_6 > 15){val_basei_1_5 = val_basei_1_5+1;val_basei_1_6 = 0;}
      if(val_basei_3_5 > 15){val_basei_3_5 = 15;val_basei_3_6 = 15;}
      if(val_basei_2_5 > 15){val_basei_2_5 = 15;val_basei_2_6 = 15;}
      if(val_basei_1_5 > 15){val_basei_1_5 = 15;val_basei_1_6 = 15;}
      if(val_basei_3_4 > 15){val_basei_3_3 = val_basei_3_3+1;val_basei_3_4 = 0;}
      if(val_basei_2_4 > 15){val_basei_2_3 = val_basei_2_3+1;val_basei_2_4 = 0;}
      if(val_basei_1_4 > 15){val_basei_1_3 = val_basei_1_3+1;val_basei_1_4 = 0;}
      if(val_basei_3_3 > 15){val_basei_3_3 = 15;val_basei_3_4 = 15;}
      if(val_basei_2_3 > 15){val_basei_2_3 = 15;val_basei_2_4 = 15;}
      if(val_basei_1_3 > 15){val_basei_1_3 = 15;val_basei_1_4 = 15;}
      if(val_basei_3_2 > 15){val_basei_3_1 = val_basei_3_1+1;val_basei_3_2 = 0;}
      if(val_basei_2_2 > 15){val_basei_2_1 = val_basei_2_1+1;val_basei_2_2 = 0;}
      if(val_basei_1_2 > 15){val_basei_1_1 = val_basei_1_1+1;val_basei_1_2 = 0;}
      if(val_basei_3_1 > 15){val_basei_3_1 = 15;val_basei_3_2 = 15;}
      if(val_basei_2_1 > 15){val_basei_2_1 = 15;val_basei_2_2 = 15;}
      if(val_basei_1_1 > 15){val_basei_1_1 = 15;val_basei_1_2 = 15;}
      var val_basei_3st = '#' + String((parseInt(val_basei_3_1)).toString(16)) + String((parseInt(val_basei_3_2)).toString(16)) + String((parseInt(val_basei_3_3)).toString(16)) + String((parseInt(val_basei_3_4)).toString(16)) + String((parseInt(val_basei_3_5)).toString(16)) + String((parseInt(val_basei_3_6)).toString(16));
      var val_basei_2st = '#' + String((parseInt(val_basei_2_1)).toString(16)) + String((parseInt(val_basei_2_2)).toString(16)) + String((parseInt(val_basei_2_3)).toString(16)) + String((parseInt(val_basei_2_4)).toString(16)) + String((parseInt(val_basei_2_5)).toString(16)) + String((parseInt(val_basei_2_6)).toString(16));
      var val_basei_1st = '#' + String((parseInt(val_basei_1_1)).toString(16)) + String((parseInt(val_basei_1_2)).toString(16)) + String((parseInt(val_basei_1_3)).toString(16)) + String((parseInt(val_basei_1_4)).toString(16)) + String((parseInt(val_basei_1_5)).toString(16)) + String((parseInt(val_basei_1_6)).toString(16));
      css_txt = css_txt + '<style type="text/css">' +
        'body .bg_base' + String(parseInt(i)+1) + '{background:' + base[i] + ' !important;}' +
        'body .bg_white.bg_base' + String(parseInt(i)+1) + '.reverse:hover' +'{background:' + base[i] + ' !important;color:#ffffff !important;}' +
        'body .bg_base' + String(parseInt(i)+1) + '.white.reverse:hover{background:#ffffff !important;color:' + base[i] + ' !important;}' +
        'body .base' + String(parseInt(i)+1) + '{color:' + base[i] + ' !important;}' +
        'body .u_line_base' + String(parseInt(i)+1) + '{border-bottom: solid 1px ' + base[i] + ' !important;}' +
        'body .box_t_base' + String(parseInt(i)+1) + '{border:thin solid ' + base[i] + ' !important;}' +
        'body .box_m_base' + String(parseInt(i)+1) + '{border:medium solid ' + base[i] + ' !important;}' +
        'body .box_b_base' + String(parseInt(i)+1) + '{border:thick solid ' + base[i] + ' !important;}' +
        'body .bg_white.box_t_base' + String(parseInt(i)+1) + '.reverse:hover,body .bg_white.box_m_base' + String(parseInt(i)+1) + '.reverse:hover,body .bg_white.box_b_base' + String(parseInt(i)+1) + '.reverse:hover{background:' + base[i] + ' !important;color:#ffffff !important;}' +
        'body .bg_' + String(parseInt(i)+1) +'.box_t_white.reverse:hover{background: #ffffff !important;color:' + base[i] + ' !important;border:thin solid ' + base[i] + ' !important;}' +
        'body .bg_' + String(parseInt(i)+1) +'.box_m_white.reverse:hover{background: #ffffff !important;color:' + base[i] + ' !important;border:medium solid ' + base[i] + ' !important;}' +
        'body .bg_' + String(parseInt(i)+1) +'.box_b_white.reverse:hover{background: #ffffff !important;color:' + base[i] + ' !important;border:thick solid ' + base[i] + ' !important;}' +
        '.square_btn.bg_base' + String(parseInt(i)+1) + '{box-shadow:0px 2px 0px 0px ' + val_basei_3st + ';}' +
        '.bg_grad.bg_base' + String(parseInt(i)+1) + '{background: -moz-linear-gradient(top, ' + val_basei_1st + ', ' + val_basei_2st + ') !important;' +
        'background: -webkit-linear-gradient(top, ' + val_basei_1st + ', ' + val_basei_2st + ') !important;' +
        'background: linear-gradient(top, ' + val_basei_1st + ', ' + val_basei_2st + ') !important;}' +
        'body hr.base' + String(parseInt(i)+1) + '{background:' + base[i] + ' !important;}' +
        '.move_line_t_base' + String(parseInt(i)+1) + '::after{background:' + base[i] + ' !important;}' +
        '.move_line_m_base' + String(parseInt(i)+1) + '::after{background:' + base[i] + ' !important;}' +
        '.move_line_b_base' + String(parseInt(i)+1) + '::after{background:' + base[i] + ' !important;}' +
        'body .r_line_1.base' + String(parseInt(i)+1) + ', body .r_line_2.base' + String(parseInt(i)+1) + ', body .r_line_3.base' + String(parseInt(i)+1) + ', body .r_line_4.base' + String(parseInt(i)+1) + ', body .r_line_5.base' + String(parseInt(i)+1) + '{border-color:' + base[i] + ' !important;}</style>';
    }
  }
  $('#base_val').replaceWith($(css_txt));
});