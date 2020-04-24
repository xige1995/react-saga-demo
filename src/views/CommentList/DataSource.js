
const data = [
  {id:0, label: '评论0'},
  {id:1, label: '评论1'},
  {id:2, label: '评论2'}
]

const DataSource = {
  getComments: function() {
    return data
  },

  getBlogPost: function(id){
    if(!id) return
    let source = data.filter(v => id === v.id)
    if(source && source.length) {
      return source
    }

  },
  addChangeListener: function(event) {
  },
  removeChangeListener: function() {
  }

}

export default DataSource