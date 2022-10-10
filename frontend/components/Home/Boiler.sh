for FILE in $(ls -1)
do
  echo """
import styles from \"./${FILE}.module.scss\" 

type ${FILE}Props = { }

export const ${FILE} = ({ }: ${FILE}Props): JSX.Element => {
  return (
    <div>${FILE}</div>
  )
}

export default ${FILE} 
  """ > "${FILE}/index.tsx"
done
