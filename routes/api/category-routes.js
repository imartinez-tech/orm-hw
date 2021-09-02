const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
try {
  const categoryData = await Category.findAll({
  include: [Product]
  })
  res.status(200).json(categoryData);
} catch (error) {
  res.status(500).json(error)
}

    
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product]
    }) 
    res.status(200).json(categoryData);
  } catch (error) { 
    res.status(500).json(error);
    }
});

router.post('/', async (req, res) => { 
  // Category.create
  // create a new category
  // req.body is what's getting posted
  try { 
    const categoryData = await Category.create(req.body); 
    res.status(200).json(categoryData); 
  } 
  catch (err) { 
    res.status(500).json(err); 
    
  }
  
});

router.put('/:id', async (req, res) => {
  // Category.update
  // update a category by its `id` value
  // to get the id => req.params.id
try {
  const categoryData = await Category.update(req.params.id);
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err); 
  
}

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // Category.destroy
  try {
    const categoryData = await Category.destroy(req.params.id);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
