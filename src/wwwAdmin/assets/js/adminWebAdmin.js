/**
 * Version v4.2
 * 
 * All rights reserved by Metabake (Metabake.org), licensed under LGPL 3.0
 *
*/

/**
* CRUD users for Editors App
*/
class AdminWebAdmin {
    /**
    * @param username user name
    * @param password user password
    */
    constructor() {

        this.serviceRpc = new httpRPC(rpcProtocol, rpcHost, rpcPort);
        // this.serviceRpc.setUser(username, password);

    }
    checkAdmin(email, pass) {
        let _this = this
        return this.serviceRpc.invoke('/api/admin/checkAdmin', 'check-admin', { admin_email: email, admin_pass: pass })
            .then(function () {
                _this.serviceRpc.setUser(email, pass);
                return true
            })

    }

    /**
    * get data for editors table
    */
    getEditorsList() {
        return this.serviceRpc.invoke('/api/admin/editors', 'get', { admin_email: window.sessionStorage.getItem('username'), admin_pass: window.sessionStorage.getItem('pass') });
    }

    /**
    * add new user
    * @param name user name, eg: 'Jane Doe'
    * @param email user email, eg: 'example@example.com'
    * @param password user password, eg: 'dfgsdgdsfg' 
    */
    addEditor(name, email, password) {
        return this.serviceRpc.invoke('/api/admin/editors-add', 'post', {
            name: name,
            email: email,
            password: password,
            admin_email: window.sessionStorage.getItem('username'), admin_pass: window.sessionStorage.getItem('pass')
        });
    }

    /**
    * edit user name
    * @param uid user id, eg: 'I3fE7p5NjtV1Y1m5pWBsZlyi4W62'
    * @param name user name, eg: 'Jane Doe'
    */
    editEditor(uid, name) {
        return this.serviceRpc.invoke('/api/admin/editors-edit', 'put', {
            name: name,
            uid: uid,
            admin_email: window.sessionStorage.getItem('username'), admin_pass: window.sessionStorage.getItem('pass')
        });
    }

    /**
    * remove user 
    * @param uid user id, eg: 'I3fE7p5NjtV1Y1m5pWBsZlyi4W62'
    */
    deleteEditor(uid) {
        return this.serviceRpc.invoke('/api/admin/editors-delete', 'delete', {
            uid: uid,
            admin_email: window.sessionStorage.getItem('username'), admin_pass: window.sessionStorage.getItem('pass')
        });
    }

}