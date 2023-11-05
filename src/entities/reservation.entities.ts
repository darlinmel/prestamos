import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany,ManyToOne } from "typeorm";
import { CustomerEntity } from "./customer.entities";
import { ServiceEntity } from "./serviceS.entities";
import { ScheduleEntity } from "./schedule.entities";


@Entity('reservation', { schema: 'spa' })
export class ReservationEntity {
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

    @ManyToOne(() => CustomerEntity, customer => customer.reservation)
    customer: CustomerEntity

    
    @ManyToOne(() => ServiceEntity, service => service.reservation)
    service: ServiceEntity

      
    @ManyToOne(() => ScheduleEntity, schedule => schedule.reservation)
    schedule: ScheduleEntity

        //--- Fin Relaciones---

    //---columnas de datos---
    datetime: Date;
    @Column('datetime', {
        name: 'fecha_hora',
        nullable: true,
        comment: 'datatime by service'
    })
    therapite: boolean;
    @Column('boolean', {
        name: 'nomTerapeuta',
        nullable: true,
        comment: 'therapiti by user'
    })

    statusService: string;
    @Column('varchar', {
        name: 'estado',
        nullable: true,
        comment: 'service status by user'
    })

    

    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.datetime) {
            return
        }
        this.datetime = this.datetime;
    }

}