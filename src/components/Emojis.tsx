import bullsEye from "../assets/Emojis/bulls-eye.webp"
import thumbsUp from "../assets/Emojis/thumbs-up.webp"
import meh from "../assets/Emojis/meh.webp"
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
  rating: number
}

const Emojis = ({rating}: Props) => {
  const emojiMap: {[key: number]: ImageProps} = {
    3: {src: meh, alt: "meh", boxSize: '25px'},
    4: {src: thumbsUp, alt: "recommanded", boxSize: '25px'},
    5: {src: bullsEye, alt: "exceptional", boxSize: '30px'},
  }
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emojis