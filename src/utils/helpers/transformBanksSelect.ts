interface BankInterface {
    key: string,
    value: string,
}

export const transformBanksSelect = (banks: BankInterface) => {
    let banksArray: { value: string; text: string; }[] = [];
    Object.entries(banks).forEach(([key, value]) => {
        banksArray.push({ value: key, text: value})
    });
    return banksArray;
}
