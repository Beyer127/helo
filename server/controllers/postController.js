module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_posts().then(post => {
            res.status(200).send(post)
        })
    }, 

    addPost: (req, res) => {
        const db = req.app.get('db')
        const {body, image} = req.body
        db.add_post([body, image]).then(post => {
            res.status(200).send(post)
        })
    },

    deletePost: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_post(id).then((deletedPost) => {
            res.status(200).send(deletedPost)
        })
    },

    editPost: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {body, image} = req.body
        db.edit_post(id, body, image).then((edited) => {
            res.status(200).send(edited)
        })
    }
}