import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { ReservationEntity } from "./reservation.entities";

@Entity('schedule', { schema: 'spa' })
export class ScheduleEntity {
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

    @OneToMany(() => ReservationEntity, reservation => reservation.schedule)
    reservation: ReservationEntity[]



    //--- Fin Relaciones---

    //---columnas de datos---
    date: Date;
    @Column('date', {
        name: 'diaSemana',
        nullable: true,
        comment: 'weekday by service'
    })
    timeEnd: string
    @Column('time', {
        name: 'hora apertura ',
        nullable: true,
        comment: 'time by service'
    })

    timeFinish: string
    @Column('time', {
        name: 'nomTerapeuta',
        nullable: true,
        comment: 'hora cierre'
    })

    

    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.date) {
            return
        }
        this.date = this.date;
    }

}