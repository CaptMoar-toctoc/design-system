import React, { FC } from 'react';
import { iProps } from './iProps';

const variantUri = {
	light: {
		h: 'https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-h.svg',
		v: 'https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-v.svg'
	},
	dark: {
		h: 'https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-h-blanco.svg',
		v: 'https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-v-blanco.svg'
	}
}

const Logo: FC<iProps> = ({ width, height, orientation, dark }) => {


	let src = variantUri.light.h; //default
	orientation = orientation || 'h';

	if (orientation == 'h') {
		src = !dark ? variantUri.light.h : variantUri.dark.h;
	} else {
		src = !dark ? variantUri.light.v : variantUri.dark.v;
	}

	let _width = width || ((orientation == 'h') ? "170" : "106") ;//si viene || default
	let _height = height || ((orientation == 'h') ? "44" : "57");//si viene || default

	if(height){
		_height = height;
		if(orientation == 'h'){
			_width = ((Number(height) * 170) / 44).toString();
		}else{
			_width = ((Number(height) * 106) / 57).toString();
		}
	}else{
		_width = width!; //Non-null assertion operator
		if(orientation == 'h'){
			_height = ((Number(width) * 44) / 170).toString();
		}else{
			_height = ((Number(width) * 57) / 106).toString();
		}
	}

	return <img src={src} alt="logo" width={_width} height={_height} />
}

export default Logo;