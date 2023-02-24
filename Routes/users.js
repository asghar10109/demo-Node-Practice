const router = require('express').Router()
const upload = require('../Multer/multer')
const {
    get_user,
    post_user,
    update_data,
    delete_data,
    get_data_by_id,
    replace_data,
    find_one_and_delete,
    upload_Images
} = require('../Controllers/users')

// get user 
router.get('/getdata' , get_user);

// post user 
router.post('/postdata',post_user)

// update
router.put('/updatedata/:username',update_data)

// delete
router.delete('/deletedata/:username',delete_data)

// findById 
router.get('/getdatabyid/:id',get_data_by_id)

// replaceOne

router.put('/replacedata/:_id',replace_data)

// findOneAndDelete

router.delete('/findanddelete/:username',find_one_and_delete)


// multer upload file or images 
router.post('/upload',upload,upload_Images)


module.exports = router