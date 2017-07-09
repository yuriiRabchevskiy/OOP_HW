class User {
    constructor(id, name, sex, birthday, address, tel, email) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.address = address;
        this.tel = tel;
        this.email = email;
        this.isDataVisible = false;
    }
    getUser() {
        return this.User;
    }
    setUser(id, name, sex, birthday, address, tel, email) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.address = address;
        this.tel = tel;
        this.email = email;
    }
    changeDataVisibility() {
        this.isDataVisible = !this.isDataVisible;
        return this.isDataVisible;
    }
}