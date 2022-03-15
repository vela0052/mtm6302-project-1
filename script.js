const data = {
    currentUser: 'currentUser',
    ideas: [{
            username: 'amyrobson',
            content: 'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
            score: 3,
        },
        {
            username: 'maxblagun',
            content: 'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
            score: 10,
        },
        {
            username: 'maxblagun',
            content: 'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
            score: 6,
        },
        {
            username: 'maxblagun',
            content: 'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
            score: 8,
        },
        {
            username: 'currentUser',
            content: 'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
            score: 3,
        },
        {
            username: 'currentUser',
            content: 'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
            score: 1,
        },
        {
            username: 'amyrobson',
            content: 'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
            score: 7,
        },
    ],
}
// insert html into ideas element
// retrieve the ideas element
// two declaration statements:
// let which creates variables
// const which creates constants
const $ideas = document.getElementById('ideas')
//retrieve the forms element
const $form = document.getElementById('form')
//retrieve text element
const $text = document.getElementById('text')
//retrive the modal
const $modal = document.getElementById('modal')
// retrieve the edit text element
const $editText = document.getElementById('editText')
// retrieve the save Button elemenu
const $saveButton = document.getElementById('saveButton')
// retrieve the edit form element
const $editForm = document.getElementById('editForm')


function createIdeas() {
    // create an empty array

    const html = []

    // loop over the ideas pushing html string
    // to empty array
    // for: use when you need to know the index.
    // for ... of 
    // for this project the index will be needed
    //data.ideas is a array of object
    // access an object using the index data.ideas [1] !== secont item
    //access the user of the second object:
    // data.ideas[1].username =====  'maxblagub'
    for (let i = 0; i < data.ideas.length; i++) {
        if(data.ideas[i].username == "currentUser"){
            html.push(`<div class="card m-3">
            <div class="card-header">
               ${data.ideas[i].username} <p class="ms-3 bg-primary text-white -weight-bold">You</p>
               <button class="btn btn-danger ms-auto delete" data-index="${i}">Delete</button>
               <button class="btn btn-outline-primary ms-3 edit"  data-index="${i}">Edit</button>
            </div>
            <div class="card-body">
              
              <p class="card-text">${data.ideas[i].content}</p>
              
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary upvote" data-index="${i}">+</button>
                <small>${data.ideas[i].score}</small>
                <button class="btn btn-secondary downvote" data-index="${i}">-</button>
            </div>
          </div>
            `)
        } else {
            html.push(`<div class="card m-3">
            <div class="card-header">
               ${data.ideas[i].username}
               
            </div>
            <div class="card-body">
              
              <p class="card-text">${data.ideas[i].content}</p>
              
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary upvote" data-index="${i}">+</button>
                <small>${data.ideas[i].score}</small>
                <button class="btn btn-secondary downvote" data-index="${i}">-</button>
            </div>
          </div>
            `)
        }
    }



    // use innerHTML to insert HTML on the page
    //use HTML array and convert to string using join
    $ideas.innerHTML = html.join('')
    //add event listener to ideas element
    // to implement event delegation
}
//create ideas by calling createIdeas
createIdeas()

$ideas.addEventListener('click', function (e) {
    //e.target is the element that received the event ('Click')
    if (e.target.classList.contains('upvote')) {
        //get the idea's index
        //to ACCESS A CUSTOM DATA ATTRIBUTE
        //dataset.index
        const index = e.target.dataset.index
        //console.log(e.target)
        //get the idea of upvote button
        const idea = data.ideas[index]
        //increase the score of the idea
        //score++
        idea.score++
        //recreate/update ideas
        createIdeas()
    }
    if (e.target.classList.contains('downvote')) {
        //get the idea's index
        //to ACCESS A CUSTOM DATA ATTRIBUTE
        //dataset.index
        const index = e.target.dataset.index
        //console.log(e.target)
        //get the idea of upvote button
        const idea = data.ideas[index]
        //increase the score of the idea
        //score++
        idea.score--
        //recreate/update ideas
        createIdeas()
    }
    if (e.target.classList.contains('delete')) {
        //get the idea's index
        //to ACCESS A CUSTOM DATA ATTRIBUTE
        //dataset.index
        const index = e.target.dataset.index
        //remove object from array
        //pop - remove the last item 
        //shift - removes the first item
        //splice - remove item from anywhere
        //splice three arguments
        //1. index(starting point)
        //2. number of items to delete
        //3+. items to be added
        //adding a new idea at beginning
        //data.ideas.splice(0, 0,{...})
        //remove an idea
        data.ideas.splice(index, 1)
        //update ideas
        createIdeas()
    }
    //access element data properties by using dataset
    if(e.target.dataset.index !== undefined ){
        if(e.target.classList.contains('edit')){
            //get the idea from the ideas array
            const idea = data.ideas[e.target.dataset.index]
            //console.log(idea)

            //update the value of the edit text element
            $editText.value = idea.content
            // add data-index attribute to our save button
            $saveButton.dataset.index = e.target.dataset.index
            $modal.style.display = 'block'
        }
    } 
})

$form.addEventListener('submit', function(e){
    e.preventDefault();
    //get data from form input
    const textData = $text.value
    // add new idea to array
    data.ideas.push({

        username: 'currentUser',
        content: textData,
        score: 0,
    })

    //clear the form
    $form.reset()
    //create Idea
    createIdeas()

})

$saveButton.addEventListener('click', function(e){
    //update the note with the form data
    //get the edit text value
    const editText = $editText.value

    // get the ideas index
    const index = $saveButton.dataset.index

    //update the note with the new edit text for the index
    data.ideas[index].content = editText

    // update the ideas
    createIdeas()

    // clear the form
    $editForm.reset()



    //close the modal
    $modal.style.display = 'none'

})
$modal.addEventListener('click', function(e){
    //console.log(e.target.dataset)
    //check if the e.target.dataset.bsDismiss = 'modal'
    // identify clicking on close Button
    if(e.target.dataset.bsDismiss === 'modal'){
        // clear the form
        $editForm.reset()
        //close the modal 
        $modal.style.display = 'none'


    }


})