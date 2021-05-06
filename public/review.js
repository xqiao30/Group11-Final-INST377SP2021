const selectEle = document.getElementsByClassName('select')[0];
const scoreText = document.getElementsByClassName('score-text')[0];
const submitBtn = document.getElementsByClassName('submit-review')[0];

axios.get(`/movie`).then((res) => {
  const data = res.data;
  let html = ``
  data.map((ele) => {
    html+= `
      <option value=${ele.movie_id}>${ele.movie_title}</option>
    `
  })
  selectEle.innerHTML = `
    <select>
      ${html}
    </select>
  `
}).catch((err) => {
  console.log('err: ', err);
})

submitBtn.addEventListener('click', () => {
  const selectSelEle = selectEle.getElementsByTagName('select')[0]
  const index = selectSelEle.selectedIndex; // selectedIndex代表的是你所选中项的index
  // console.log('I type in', changeText.value);
  console.log('I selected', selectSelEle.options[index].value, selectSelEle.options[index].text);
  if (!scoreText.value || !selectSelEle.options[index].value) {
    alert('Please chaeck the input info')
    return;
  }
  axios({
    method: "put",
    url: `/movie_imdb_ratings`,
    data: {
      movie_id: selectSelEle.options[index].value,
      imdb_score: scoreText.value,
    },
  }).then(function (res) { //回调函数  接受服务器参数
    console.log(res);
    const data = res.data;
    data && alert('Successfully Updated')
  }).catch((error) => {
    console.log('error: ', error);
    alert('Update Failed')
  })
})
