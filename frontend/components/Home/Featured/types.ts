export default interface GetStaticProps {
  data: {
    medialogo: string;
    mediaurl: string;
    IsActive: boolean;
    createdAt: string;
    mediatitle: string;
    _id: string;
    __v: number;
  }[];
  isWhite: boolean;
}
