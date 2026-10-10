import * as React from 'react'
import { GraphicOption, Selector } from '../../options'
import { makeOptionComponent } from '../makeOptionComponent'

export const Skull = makeOptionComponent('CLOTHES', 'Skull')
export const SkullOutline = makeOptionComponent('CLOTHES', 'SkullOutline')
export const Bat = makeOptionComponent('CLOTHES', 'Bat')
export const Cumbia = makeOptionComponent('CLOTHES', 'Cumbia')
export const Deer = makeOptionComponent('CLOTHES', 'Deer')
export const Diamond = makeOptionComponent('CLOTHES', 'Diamond')
export const Hola = makeOptionComponent('CLOTHES', 'Hola')
export const Selena = makeOptionComponent('CLOTHES', 'Selena')
export const Pizza = makeOptionComponent('CLOTHES', 'Pizza')
export const Resist = makeOptionComponent('CLOTHES', 'Resist')
export const Bear = makeOptionComponent('CLOTHES', 'Bear')
export const Steelpan = makeOptionComponent('CLOTHES', 'Steelpan')
export const ScarletIbis = makeOptionComponent('CLOTHES', 'ScarletIbis')
export const DoctorBird = makeOptionComponent('CLOTHES', 'DoctorBird')
export const TrinidadAndTobagoBadge = makeOptionComponent('CLOTHES', 'TrinidadAndTobagoBadge')
export const JamaicaBadge = makeOptionComponent('CLOTHES', 'JamaicaBadge')
export const Anansi = makeOptionComponent('CLOTHES', 'Anansi')
export const Cocrico = makeOptionComponent('CLOTHES', 'Cocrico')
export const Ackee = makeOptionComponent('CLOTHES', 'Ackee')

export interface Props {
  uid: string
}

export default class Graphics extends React.Component<Props> {
  render () {
    return (
      <Selector option={GraphicOption} defaultOption={Skull}>
        <Bat uid={this.props.uid} />
        <Cumbia uid={this.props.uid} />
        <Deer uid={this.props.uid} />
        <Diamond uid={this.props.uid} />
        <Hola uid={this.props.uid} />
        <Pizza uid={this.props.uid} />
        <Resist uid={this.props.uid} />
        <Selena uid={this.props.uid} />
        <Bear uid={this.props.uid} />
        <SkullOutline uid={this.props.uid} />
        <Skull uid={this.props.uid} />
        <Steelpan uid={this.props.uid} />
        <ScarletIbis uid={this.props.uid} />
        <DoctorBird uid={this.props.uid} />
        <TrinidadAndTobagoBadge uid={this.props.uid} />
        <JamaicaBadge uid={this.props.uid} />
        <Anansi uid={this.props.uid} />
        <Cocrico uid={this.props.uid} />
        <Ackee uid={this.props.uid} />
      </Selector>
    )
  }
}
