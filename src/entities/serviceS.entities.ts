import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { ReservationEntity } from "./reservation.entities";
import { TherapitiEntity } from "./therapiti.entities";

@Entity('serviceS', { schema: 'spa' })
export class ServiceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: String;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',

    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteaAt: Date;

    
    //---Relaciones---
    @OneToMany(() => ReservationEntity, reservation => reservation.service)
    reservation: ReservationEntity[]

    @OneToMany(() => TherapitiEntity, therapiti => therapiti.service)
    therapiti: TherapitiEntity[]


   //--- Fin Relaciones---

    //---columnas de datos---
    nameService:string;
    @Column('string', {
        name: 'nombreServicio',
        nullable: true,
        comment: 'name service'
    })
    descritionSer: string
    @Column('string', {
        name: 'descripcionServicio ',
        nullable: true,
        comment: 'descripcion service'
    })

    price: number
    @Column('numeric', {
        name: 'precio',
        nullable: true,
        comment: 'price'
    })

    duration: number
    @Column('numeric', {
        name: 'duracion',
        nullable: true,
        comment: 'duration'
    })

    

    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.duration) {
            return
        }
        this.duration = this.duration;
    }

}