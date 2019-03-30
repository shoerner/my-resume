export const blackLuminance = 0;
export const whiteLuminance = 1;

export const getLuminance = (rgb: string) => {
	if (!rgb.startsWith("#")) {
		return 1;
	}

	const baseConvert = (channel: string) => {
		return channel.length === 2 ? parseInt(channel, 16) : 0;
	};

	const rgbChannels = (rgb.substring(1).match(/.{2}/g) || []).map(channel => baseConvert(channel));
	const linearizedChannels = rgbChannels.map(channel => channel / 255);
	const channelLuminance = linearizedChannels.map(channel => {
		return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
	});

	return 0.2126 * channelLuminance[0] + 0.7152 * channelLuminance[1] + 0.0722 * channelLuminance[2];
};
