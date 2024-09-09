export interface Pupil {
    _id: String,
    foreName: String,
    surName: String,
    form: String,
    send: Boolean,
    pic: String

}


export interface PupilProps {
    pupil: Pupil,
    index: number,
    randomPeople: any | null
  }
  