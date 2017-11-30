
var db = global.db

var vuexController = db.collection('vuex_todo')

export var addText = async (req, res) => { // 添加文本， 返回新的文本列表
  var text = req.body['text']
  var data = {}
  if (text) {
    data.text = text
    try {
      var _todos = await vuexController.find({}).toArray()
      data.id = _todos.length + 1 // 添加id
      await vuexController.insert(data)
    } catch (err) {
      return res.json({ success: false, error: '添加失败' + err })
    }
  }

  try {
    var todos = await vuexController.find({}).toArray()
  } catch (err) {
    return res.json({ success: false, error: err })
  }
  data = {}
  data.res = { 'now': 'vuex' }
  data.list = todos
  console.log(data)
  return res.json({ success: true, data: data })
}

export var getTextList = async (req, res) => { // 返回新的文本列表
  var data = {}

  try {
    var todos = await vuexController.find({}).toArray()
  } catch (err) {
    return res.json({ success: false, error: err })
  }
  data = {}
  data.res = { 'now': 'vuex' }
  data.list = todos
  console.log(data)
  return res.json({ success: true, data: data })
}

module.exports = {
  addText,
  getTextList
}
