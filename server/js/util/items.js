var Items = {};

Items.Data = {};
Items.Ids = {};

Items.getData = function(name) {
    if (name in Items.Data)
        return Items.Data[name];

    return 'null';
};

Items.idToString = function(id) {
    if (id in Items.Ids)
        return Items.Ids[id].key;

    return 'null';
};

Items.idToName = function(id) {
    if (id in Items.Ids)
        return Items.Ids[id].name;

    return 'null';
};

Items.stringToId = function(name) {
    if (name in Items.Data)
        return Items.Data[name].id;

    return 'null';
};

Items.getWeaponLevel = function(weaponName) {
    if (Items.isWeapon(weaponName))
        return Items.Data[weaponName].attack;

    return -1;
};

Items.getArmourLevel = function(armourName) {
    if (Items.isArmour(armourName))
        return Items.Data[armourName].defense;

    return -1;
};

Items.isArcherWeapon = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'weaponarcher';

    return false;
};

Items.isWeapon = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'weapon' || Items.Data[string].type === 'weaponarcher';

    return false;
};

Items.isArmour = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'armor' || Items.Data[string].type === 'armorarcher';

    return false;
};

Items.isPendant = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'pendant';

    return false;
};

Items.isRing = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'ring';

    return false;
};

Items.isBoots = function(string) {
    if (string in Items.Data)
        return Items.Data[string].type === 'boots';

    return false;
};

Items.isStackable = function(id) {
    return id === 190 || id === 191 || id === 192 || id === 193 || id === 195 || id === 199 || id === 202;
};

Items.isEdible = function(id) {
    return id === 190 || id === 191 || id === 192 || id === 193;
};

Items.isEquippable = function(string) {
    return Items.isArmour(string) || Items.isWeapon(string);
};

Items.healsHealth = function(id) {
    return id === 190 || id === 192 || id === 193;
};

Items.healsMana = function(id) {
    return id === 191;
};

Items.getHealingFactor = function(id) {
    if (id === 190)
        return 100;
    else if (id === 192)
        return 200;
    else if (id === 193)
        return 350;

    return -1;
};

Items.getManaFactor = function(id) {
    if (id === 191)
        return 35;

    return -1;
};

module.exports = Items;