window.onclick = function (event) {
    const customSelects = [...document.querySelectorAll('custom-select')] || []
    console.log({customSelects})
    const optionDiv = document.querySelector('.option-div')
    if (customSelects.include(event.target)) return
    return optionDiv.remove()
}

window.onload = function () {
    const list = [...document.querySelectorAll("select")];

    const customSelects = list.map(select => {
        select.classList.add('hide-select')
        const options = select.childNodes
        const newSelect = document.createElement('div')

        // const img = document.createElement('img')
        // img.setAttribute('src', '/public/images/mail.png')
        // newSelect.appendChild(img)
        
        newSelect.classList.add('custom-select')

        newSelect.textContent = select.childNodes[1].textContent

        newSelect.onclick = () => {
            const exists = document.querySelector('.option-div')
            if (exists) {
                return exists.remove()
            }
            const optionDiv = document.createElement('div')
            optionDiv.classList.add('option-div')
            newSelect.appendChild(optionDiv)

            options.forEach((option, index) => {
                if (index < 2) return

                const optionElement = document.createElement('div')
                optionElement.classList.add('option')
                optionElement.textContent = option.textContent
                optionElement.onclick = (event) => {
                    event.stopPropagation()
                    onSelect(optionDiv, option)
                }
                optionDiv.appendChild(optionElement)
            })
        }


        function onSelect(opt, element) {
            newSelect.setAttribute("selected", element.value)
            newSelect.textContent = element.text
            console.log({ opt })
            return opt.remove()
        }

        return newSelect
    })

    const [select1, select2] = customSelects
    console.log({ select1, select2 })
    const selectDivs = [...document.querySelectorAll('.select-div')]
    selectDivs[0].appendChild(select1)
    selectDivs[1].appendChild(select2)



}