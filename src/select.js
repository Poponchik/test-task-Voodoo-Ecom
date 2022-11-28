window.onload = function () {
    const selectList = [...document.querySelectorAll("select")];

    const customSelects = selectList.map(select => {
        select.classList.add('hide-select')
        const options = select.childNodes

        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
        wrapper.tabIndex = "0"
        wrapper.onblur = () => {
            const optionDiv = document.querySelector('.option-div')
            optionDiv.remove()
        }
        const newSelect = document.createElement('div')
        const img = document.createElement('img')
        img.setAttribute('src', '/public/images/arrow.svg')
        newSelect.appendChild(img)

        wrapper.appendChild(newSelect)
        wrapper.appendChild(img)

        newSelect.classList.add('custom-select')

        newSelect.textContent = select.childNodes[1].textContent

        wrapper.onclick = () => {
            const existedOptionDiv = document.querySelector('.option-div')
            if (existedOptionDiv) {
                return existedOptionDiv.remove()
            }
            const optionDiv = document.createElement('div')
            optionDiv.classList.add('option-div')
            newSelect.appendChild(optionDiv)

            options.forEach((option, index) => {
                if (index < 2) return  //remove first default option from list

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

        function onSelect(optionDiv, element) {
            newSelect.setAttribute("selected", element.value)
            newSelect.textContent = element.text
            return optionDiv.remove()
        }
        return wrapper
        
    })

    const [select1, select2] = customSelects
    const selectDivs = [...document.querySelectorAll('.select-div')]
    selectDivs[0].appendChild(select1)
    selectDivs[1].appendChild(select2)

}