class Services {
    constructor(baseURL_) {
        console.info("--baseURL_:", baseURL_[1]);
        this.baseUrl = baseURL_;
        this.serviceRPC = new httpRPC(baseURL_[0], baseURL_[1], baseURL_[2]);
    }
    createConfig(serialised) {
        var email = serialised.filter(email => email.name == 'email')[0].value;
        var password = serialised.filter(password => password.name == 'password')[0].value;
        var emailjs = serialised.filter(emailjs => emailjs.name == 'emailjs')[0].value;
        var pathToSite = serialised.filter(path => path.name == 'path')[0].value;
        console.info("--email:", email);
        return this.serviceRPC.invoke('/setup', 'setup', { email: email, password: password, emailjs: emailjs, pathToSite: pathToSite })
            .then((result) => {
            console.info('test api: ', result);
            return result;
        }).catch((error) => {
            console.info("--error:", error);
        });
    }
    deleteTables() {
        this.serviceRPC.invoke('/delete', 'delete')
            .then((result) => {
            console.info('test api: ', result);
            return result;
        }).catch((error) => {
            console.info("--error:", error);
        });
    }
}