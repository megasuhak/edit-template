import { Component, OnInit, Input } from '@angular/core';
import { EditingAreaItemService } from '../editing-area-item/editing-area-item.service';
import { WINtypefaces, fontColor, MACtypefaces } from './edit-bar-data';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'bl-edit-bar',
  templateUrl: './edit-bar.component.html',
  styleUrls: ['./edit-bar.component.css']
})
export class EditBarComponent implements OnInit {

  @Input()
  set editBarConfigure(value: any) {
    if (value) {
      this.setValue(value);
    }
  }
  // 字体
  typefacesValue: any;
  typefaces: any;
  isShowTypefaces = true;
  typefacesStyle = {
    'outline': 'none',
    'width': '150px',
    'height': '30px',
    'border-radius': '5px'
  };
  // 字体颜色
  fontColor = fontColor;
  isFontColor = true;
  fontColorStyle = {
    'outline': 'none',
    'width': '111px',
    'height': '30px',
    'border-radius': '5px',
    'background': '#fff'
  };
  fontBackgroundColor: any;
  // 滑块
  btn: any;
  bar: any;
  title: any;
  step: any;
  // 字体大小滑块
   isFontSize = true;
   fontSizeStyle = {
    'width': '110px',
   };
   fontSizeMaximumInterval = 30;
  fontSize = '0px';
  fontSizeBtn: any;
  fontSizeBar: any;
  fontSizeStep: any;
  // 行距滑块
  isLineHeight = true;
  lineHeightStyle = {
    'width': '110px',
   };
   lineHeightMaximumInterval = 30;
   lineHeight = '0倍';
   lineHeightBtn: any;
   lineHeightBar: any;
   lineHeightStep: any;
  //  间距滑块
  isLetterSpacing = true;
  letterSpacingStyle = {
    'width': '110px',
  };
  letterSpacingMaximumInterval = 30;
  letterSpacing = '0px';
  letterSpacingBtn: any;
  letterSpacingBar: any;
  letterSpacingStep: any;
  // 样式
  isTextStyle = true;
  // 背景
  isBackgroundColor = true;
  backgroundColorStyle = {
    'outline': 'none',
    'width': '111px',
    'height': '30px',
    'border-radius': '5px'
  };
  backgroundColor: any;
  backgroundColorList = fontColor;
  // 图文背景色
  isImgTextBackgroundColor = true;
  imgTextBackgroundColorStyle = {
    'outline': 'none',
    'width': '111px',
    'height': '30px',
    'border-radius': '5px'
  };
  imgTextBackgroundColor: any;
  imgTextBackgroundColorList = fontColor;
  // 边框
  borderValue: any;
  isBorder = true;
  borderStyle = {
    'outline': 'none',
    'width': '150px',
    'height': '30px',
    'border-radius': '5px',
    'margin-left': '-5px'
  };
  borderLineStyle = {
    'width': '110px',
  };
  borderLine = '0px';
  borderLineBar: any;
  borderLineBtn: any;
  borderLineStep: any;
  borderLineMaximumInterval = 30;
  borderStyleList = [
    {text: '无边框', value: 'none'},
    {text: '点状', value: 'dotted'},
    {text: '实线', value: 'solid '},
    {text: '双线', value: 'double'},
    {text: '虚线', value: 'dashed'}
  ];
  borderColorStyle = {
    'outline': 'none',
    'width': '110px',
    'height': '30px',
    'border-radius': '5px',
    'margin-left': '44px'
  };
  borderColorList = fontColor;
  borderColor: any;
// 分割线
  isLineBorder = true;
  lineBorderStyleList = [
    {text: '实线', value: 'solid '},
    {text: '点状', value: 'dotted'},
    {text: '双线', value: 'double'},
    {text: '虚线', value: 'dashed'}
  ];
  lineBorderColorStyle = {
    'outline': 'none',
    'width': '110px',
    'height': '30px',
    'border-radius': '5px'
  };
  lineBorderLine = '0px';
  lineBorderLineBar: any;
  lineBorderLineBtn: any;
  lineBorderLineStep: any;
  lineBorderLineMaximumInterval = 30;

  lineMargin = '0px';
  lineMarginLineBar: any;
  lineMarginLineBtn: any;
  lineMarginLineStep: any;
  lineMarginLineMaximumInterval = 30;
  lineBorderColor = '#000000';


  // 以下是图片
  // backGroundUrl: any;
  constructor(
    public editingAreaItemService: EditingAreaItemService,
    private message: NzMessageService
  ) { }

  ngOnInit() {

    const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (isMac) {
      this.typefaces = MACtypefaces;
    } else {
      this.typefaces = WINtypefaces;
    }
    // tslint:disable-next-line:max-line-length
    this.scale(this.fontSizeBtn, this.fontSizeBar, this.fontSizeStep, 'font-size-btn', 'font-size-bar', 'fontSize', this.lineBorderLineMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.lineHeightBtn, this.lineHeightBar, this.lineHeightStep, 'line-height-btn', 'line-height-bar', 'lineHeight', this.lineHeightMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.letterSpacingBtn, this.letterSpacingBar, this.letterSpacingStep, 'letter-spacing-btn', 'letter-spacing-bar', 'letterSpacing', this.letterSpacingMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.borderLineBtn, this.borderLineBar, this.borderLineStep, 'border-line-btn', 'border-line-bar', 'borderLine', this.borderLineMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.lineBorderLineBtn, this.lineBorderLineBar, this.lineBorderLineStep, 'line-border-line-btn', 'line-border-line-bar', 'lineBorderLine', this.borderLineMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.lineMarginLineBtn, this.lineMarginLineBar, this.lineMarginLineStep, 'line-margin-btn', 'line-margin-bar', 'lineMargin', this.lineMarginLineMaximumInterval);
  }
  setValue(obj: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === 'typefaces') {
        this.typefaces = obj[i].typefacesList ? obj[i].typefacesList : this.typefaces;
        this.isShowTypefaces = obj[i].isShow === undefined ? this.isShowTypefaces : obj[i].isShow;
        this.typefacesStyle = obj[i].style ? obj[i].style : this.fontColorStyle;
      }
      if (obj[i].name === 'fontColor') {
        this.fontColor = obj[i].fontColorList ? obj[i].fontColorList : this.fontColor;
        this.isFontColor = obj[i].isShow === undefined ? this.isFontColor : obj[i].isShow;
        this.fontColorStyle = obj[i].style ? obj[i].style : this.typefacesStyle;
      }
      if (obj[i].name === 'fontSize') {
        this.isFontSize = obj[i].isShow === undefined ? this.isFontSize : obj[i].isShow;
        this.fontSizeMaximumInterval = obj[i].maximumInterval ? obj[i].maximumInterval : this.fontSizeMaximumInterval;
        this.fontSizeStyle = obj[i].style ? obj[i].style : this.fontSizeStyle;
      }
      if (obj[i].name === 'lineHeight') {
        this.isLineHeight = obj[i].isShow === undefined ? this.isLineHeight : obj[i].isShow;
        this.lineHeightMaximumInterval = obj[i].maximumInterval ? obj[i].maximumInterval : this.lineHeightMaximumInterval;
        this.lineHeightStyle = obj[i].style ? obj[i].style : this.lineHeightStyle;
      }
      if (obj[i].name === 'letterSpacing') {
        this.isLetterSpacing = obj[i].isShow === undefined ? this.isLetterSpacing : obj[i].isShow;
        this.letterSpacingMaximumInterval = obj[i].maximumInterval ? obj[i].maximumInterval : this.letterSpacingMaximumInterval;
        this.letterSpacingStyle = obj[i].style ? obj[i].style : this.letterSpacingStyle;
      }
      if (obj[i].name === 'textStyle') {
        this.isTextStyle = obj[i].isShow === undefined ? this.isTextStyle : obj[i].isShow;
      }
      if (obj[i].name === 'backgroundColor') {
        this.backgroundColorList = obj[i].backgroundColorList ? obj[i].backgroundColorList : this.backgroundColorList;
        this.isBackgroundColor = obj[i].isShow === undefined ? this.isBackgroundColor : obj[i].isShow;
        this.backgroundColorStyle = obj[i].style ? obj[i].style : this.backgroundColorStyle;
      }
      if (obj[i].name === 'imgTextBackgroundColor') {
        this.imgTextBackgroundColorList = obj[i].imgTextBackgroundColorList ? obj[i].imgTextBackgroundColorList : this.imgTextBackgroundColorList;
        this.isImgTextBackgroundColor = obj[i].isShow === undefined ? this.isImgTextBackgroundColor : obj[i].isShow;
        this.imgTextBackgroundColorStyle = obj[i].style ? obj[i].style : this.imgTextBackgroundColorStyle;
      }
      if (obj[i].name === 'border') {
        this.isBorder = obj[i].isShow === undefined ? this.isBorder : obj[i].isShow;
      }
      if (obj[i].name === 'lineBorder') {
        this.isLineBorder = obj[i].isShow === undefined ? this.isLineBorder : obj[i].isShow;
      }
    }
  }
  setTypeface(value: string) {
    this.editingAreaItemService.itemDom.style['font-family'] = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setfontColor(value: string) {
    this.fontBackgroundColor = value;
    this.fontColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style.color = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setBorderStyle(value: string) {
    this.editingAreaItemService.itemDom.style['border-style'] = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setLineBorderStyle(value: string) {
    this.editingAreaItemService.itemDom.style['border-style'] = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setBackgroundColorStyle(value: string) {
    this.backgroundColor = value;
    this.backgroundColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style.background = value;
    // this.editingAreaItemService.boxDom.style.background = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setImgTextBackgroundColorStyle(value: string) {
    this.imgTextBackgroundColor = value;
    this.imgTextBackgroundColorStyle['background-color'] = value;
    this.editingAreaItemService.boxDom.style.background = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setborderColorStyle(value: string) {
    this.borderColor = value;
    this.borderColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style['border-color'] = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }
  setLineBorderColorStyle(value: string) {
    this.lineBorderColor = value;
    this.lineBorderColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style['border-color'] = value;
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }


  // 滑块
  scale(btndom: any, bardom: any, stepdom: any, btn: any, bar: any, name: any, maximumInterval: number) {
    btndom = document.getElementById(btn);
    bardom = document.getElementById(bar);
    stepdom = bardom.getElementsByTagName('DIV')[0];
    this.init(maximumInterval, name, btndom, bardom, stepdom);
  }
  init(maximumInterval: number, name: string, btndom: any, bardom: any, stepdom: any) {
    const f = this;
    const g = document;
    const b = window;
    const m = Math;
    btndom.onmousedown = function(e: any) {
      const x = e.clientX;
      const l = this.offsetLeft;
      const max = bardom.offsetWidth - this.offsetWidth;
      // tslint:disable-next-line:only-arrow-functions
      g.onmousemove = function(es) {
        f.editingAreaItemService.elem.focus();
        f.editingAreaItemService.isChange = false;
        const thisX = es.clientX;
        const to = m.min(max, m.max(-2, l + (thisX - x)));
        btndom.style.left = to + 'px';
        f.ondrag(m.round(m.max(0, to / max) * maximumInterval), to, name, stepdom);
        if (b.getSelection) {
          b.getSelection().removeAllRanges();
        }
      };
      g.onmouseup = function() {
        this.onmousemove = null;
      };
    };
  }
  ondrag(pos: any, x: any, name: string, stepdom: any) {
    stepdom.style.width = Math.max(0, x) + 'px';
    if (name === 'fontSize') {
      this.fontSize = pos + 'px';
      this.editingAreaItemService.itemDom.style['font-size'] = this.fontSize;
    } else if (name === 'lineHeight') {
      this.lineHeight = pos / 10 + '倍';
      this.editingAreaItemService.itemDom.style['line-height'] = pos / 10;
    } else if (name === 'letterSpacing') {
      this.letterSpacing = pos + 'px';
      this.editingAreaItemService.itemDom.style['letter-spacing'] =  this.letterSpacing;
    } else if (name === 'borderLine') {
      this.borderLine = pos + 'px';
      this.editingAreaItemService.itemDom.style['border-width'] =  this.borderLine;
    } else if (name === 'lineBorderLine') {
      this.lineBorderLine = pos + 'px';
      this.editingAreaItemService.itemDom.style['border-width'] =  this.lineBorderLine;
    } else if (name === 'lineMargin') {
      this.lineMargin = pos + 'px';
      this.editingAreaItemService.itemDom.style.margin =  `${this.lineMargin} 0`;
    }
  }

  changeTextStyle(style: string) {
    if (style === 'font-weight') {
      if (this.editingAreaItemService.itemDom.style['font-weight'] || this.editingAreaItemService.itemDom.style['font-weight'] === 400) {
        if (this.editingAreaItemService.itemDom.style['font-weight'] >= 600) {
          this.editingAreaItemService.itemDom.style['font-weight'] = 400;
        } else {
          this.editingAreaItemService.itemDom.style['font-weight'] = 600;
        }
      } else {
        this.editingAreaItemService.itemDom.style['font-weight'] = 600;
      }
    } else if (style === 'font-style') {
      if (this.editingAreaItemService.itemDom.style['font-style'] || this.editingAreaItemService.itemDom.style['font-style'] === 'italic') {
        if (this.editingAreaItemService.itemDom.style['font-style'] === 'italic') {
          this.editingAreaItemService.itemDom.style['font-style'] = 'normal';
        } else {
          this.editingAreaItemService.itemDom.style['font-style'] = 'italic';
        }
      } else {
        this.editingAreaItemService.itemDom.style['font-style'] = 'italic';
      }
    } else if (style === 'left') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'left';
    } else if (style === 'center') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'center';
    } else if (style === 'right') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'right';
    } else if (style === 'justify') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'justify';
    }
    this.editingAreaItemService.elem.focus();
    this.editingAreaItemService.isChange = false;
  }


  // 图片
  onChangePicture(e: any) {
    const that = this;
    const file = e.files[0];
    if (file.type.indexOf('image/') === -1) {
      this.message.create('error', `文件格式错误，请上传图片文件！`);
      return false;
    } else {
      if (file.size < 195300) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          that.editingAreaItemService.imgUrl = this.result;
          that.editingAreaItemService.itemDom.url = this.result;
          that.editingAreaItemService.isChange = false;
        };
      } else {
        this.message.create('error', `文件大于300k，请重新上传！`);
      }
    }
    const fileDoc = document.getElementById('file') as HTMLInputElement;
    fileDoc.value = '';
  }
  onChangeUrl(value: any) {
    const reUrl = /(http|https):\/\/([\w.]+\/?)\S*/;
    if (reUrl.test(value)) {
      this.editingAreaItemService.isReUrl = false;
      this.editingAreaItemService.itemDom.href = value;
    } else {
      this.editingAreaItemService.isReUrl = true;
    }
    this.editingAreaItemService.isChange = false;
  }

  clearValue() {
    // 字体
    const typefacesStyle = document.getElementById('typefacesStyle').getElementsByTagName('option');
    // typefacesStyle[0].selected = true;
    this.typefacesValue = null;
    // 字体颜色
    // this.fontColorStyle['background-color'] = '#fff';
    this.fontBackgroundColor = null;
    // 字号
    this.fontSize = '0px';
    document.getElementById('font-size-btn').style.left = 0 + 'px';
    document.getElementById('font-size-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    // 行距
    this.lineHeight = '0倍';
    document.getElementById('line-height-btn').style.left = 0 + 'px';
    document.getElementById('line-height-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    // 间距
    this.letterSpacing = '0px';
    document.getElementById('letter-spacing-btn').style.left = 0 + 'px';
    document.getElementById('letter-spacing-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    // 背景色
    // this.backgroundColorStyle['background-color'] = '#fff';
    this.backgroundColor = null;
    // 边框
    const borderStyle = document.getElementById('borderStyle').getElementsByTagName('option');
    // borderStyle[0].selected = true;
    this.borderValue = null;
    this.borderLine = '0px';
    document.getElementById('border-line-btn').style.left = 0 + 'px';
    document.getElementById('border-line-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    // this.borderColorStyle['background-color'] = '#fff';
    this.borderColor = null;
    // 分割线
    const partition = document.getElementById('partition').getElementsByTagName('option');
    partition[0].selected = true;
    this.lineBorderLine = '0px';
    document.getElementById('line-border-line-btn').style.left = 0 + 'px';
    document.getElementById('line-border-line-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    this.lineMargin = '0px';
    document.getElementById('line-margin-btn').style.left = 0 + 'px';
    document.getElementById('line-margin-bar').getElementsByTagName('DIV')[0]['style'].width = 0 + 'px';
    this.lineBorderColorStyle['background-color'] = '#fff';
    this.lineBorderColor = '#fff';
    // 图文
    // this.imgTextBackgroundColorStyle['background-color'] = '#fff';
    this.imgTextBackgroundColor = null;
  }


}

