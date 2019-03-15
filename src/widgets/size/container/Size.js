import React, {Component} from 'react'

class Size extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {attributes} = this.props
        return(
            <form>
                {
                    attributes !==undefined
                    ? attributes.map((attribute, index) => {
                        if(attribute.attribute_name ==='Size'){
                            return (
                                <label>
                                  <input id={attribute.attribute_value} key={index} type='radio'  />
                                  {attribute.attribute_value}
                                </label>
                                )
                        }
                    })
                    : ''
                }
            </form>

        )

    }
}

export default Size