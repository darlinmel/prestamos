import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany,ManyToOne } from "typeorm";
import { UserEntity } from "./user.entities";
import { ServiceEntity } from "./serviceS.entities";


@Entity('therapiti', { schema: 'spa' })
export class TherapitiEntity {
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
    @ManyToOne(() => UserEntity, user => user.therapiti)
    user: UserEntity

    @ManyToOne(() => ServiceEntity, service => service.therapiti)
    service: ServiceEntity

     //--- Fin Relaciones---
    

    //---columnas de datos---
    nameTh: string;
    @Column('string', {
        name: 'nombreTerapeuta',
        nullable: true,
        comment: 'name therapit'
    })
    specialty: string;
    @Column('string', {
        name: 'especialidad',
        nullable: true,
        comment: 'name specialty'
    })

   

    

    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.specialty) {
            return
        }
        this.specialty = this.specialty;
    }

}