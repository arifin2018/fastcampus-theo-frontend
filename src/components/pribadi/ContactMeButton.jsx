const ContactMeButton = (props) => {
    return (
        <button className="bg-gray-700 text-white p-2 rounded-md">
            {props.children}
        </button>
    )
}

export default ContactMeButton