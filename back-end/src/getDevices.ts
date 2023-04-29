import { WebUSB } from 'usb';

export const getAllDevices = async () : Promise<USBDevice[]> => {
    const customWebUSB = new WebUSB({
        allowAllDevices: true
    });
    const devices = await customWebUSB.getDevices();
    console.log(devices);
    return devices;
};