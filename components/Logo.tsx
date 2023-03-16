import Image from "next/image"

function Logo(props: any) {
    const { renderDefault, title } = props

  return <div className="flex items-center space-x-2">
        <Image
            className="rounded-full object-cover"
            height={55}
            width={55}
            src="/images/Logo2.jpg"
            alt="Logo"
        />
        <>{renderDefault(props)}</>
    </div>
  
}

export default Logo