const GREETING = ["Hello Navya! You can do it, Have faith and be consistent",
    'Hey Nav! You are awesome',
    'Hey! Good Morning',
    'Hey, Keep up, you can do this',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[ Math.floor( Math.random() * GREETING.length )],
    });
};
