import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { TherapitiEntity } from "./therapiti.entities";
import { CustomerEntity } from "./customer.entities";


@Entity('user', { schema: 'spa' })
export class UserEntity {
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
    @OneToMany(() => TherapitiEntity, therapiti => therapiti.user)
    therapiti: TherapitiEntity[]

    @OneToMany(() => CustomerEntity, customer => customer.user)
    customer: TherapitiEntity[]


    //--- Fin Relaciones---

    //---columnas de datos---
    username: string;
    @Column('string', {
        name: 'usuario',
        nullable: true,
        comment: 'username'
    })
    password: string;
    @Column('string', {
        name: 'contraseña',
        nullable: true,
        comment: 'password'
    })

   

    

    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.password) {
            return
        }
        this.password = this.password;
    }

}