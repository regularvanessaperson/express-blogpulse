var db = require('./models')

// db.comment.create({
//   name: 'Lois Parker',
//   content: 'The view is really great, I agree!.',
//   articleId: 3
// })
// .then(function(comment) {
//   console.log(comment.get())
// })

// db.article.findOne({
//     where: { id: 1 },
//     include: [db.comment]
//   }).then(function(article) {
//     // by using eager loading, the article model should have a comments key
//     console.log(article.comments)
//   })

// db.article.findOne({
//     where: { id: 1 },
//     include: [db.author, db.comment]
//   })
//   .then((article) => {
//     if (!article) throw Error()
//     db.comment.findAll({
//         where:{articleId: 1},
//         include: [db.article]
//     })
//     .then((comment=>{
//         console.log(comment)
//     }))
//     console.log(article.comment)
//     // res.render('articles/show', { article: article })
//   })
//   .catch(err=>{
//       console.log(err)
//   })

// db.article.destroy({
//     where: {content: "I love biking!"}
// })
// .then(numRowsDeleted =>{
//     console.log(numRowsDeleted)
// })