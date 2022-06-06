function dalCb(cb){
    return (err, res) => cb(res);
};

module.exports = dalCb;