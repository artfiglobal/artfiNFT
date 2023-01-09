
import { Container, Typography } from "../../reusables/Atoms"
import styles from "./Objectives.module.scss"

type ObjectivesProps = {}

export const Objectives = ({ }: ObjectivesProps): JSX.Element => {
  return (
    <div className={styles.objectives}>
      <Typography color="black" variant="heading">
        Objectives
      </Typography>
      <p className={styles.objective_subheading}>
        Building a platform for investment in the fine arts for buying & selling fractionalise ownership as NFT representing an investment.
      </p>
      <div className={styles.container_holder}>
        <Container extraClass={styles.Container} color="white">
          <Typography extraClass={styles.container_heading} color="purple" variant="body">
            Transparency
          </Typography>
          <Typography color="black" variant="body">
            Demystifying the art world and making people feel comfortable in it.
          </Typography>
        </Container>
        <Container extraClass={styles.Container} color="white">
          <Typography extraClass={styles.container_heading} color="purple" variant="body">
            Widening participation
          </Typography>
          <Typography color="black" variant="body">
            Allowing more people to interact with art in the way that worked for them.
          </Typography>
        </Container>
        <Container extraClass={styles.Container} color="white">
          <Typography extraClass={styles.container_heading} color="purple" variant="body">
            Fine Arts on Blockchain
          </Typography>
          <Typography color="black" variant="body">
            Introducing new tradable digital assets from the worlds largest shared asset class.
          </Typography>
        </Container>
      </div>
    </div>
  )
}

export default Objectives

