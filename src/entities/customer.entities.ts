import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate,OneToMany,ManyToOne } from "typeorm";
import { UserEntity } from "./user.entities";
import { ReservationEntity } from "./reservation.entities";


@Entity('customer', { schema: 'spa' })
export class CustomerEntity {
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
    @ManyToOne(() => UserEntity, user => user.customer)
    user: UserEntity

    @OneToMany(() => ReservationEntity, reservation => reservation.customer)
   reservation: ReservationEntity[]

        //--- Fin Relaciones---
    //---columnas de datos---
    name: string;
    @Column('varchar', {
        name: 'nombre',
        nullable: true,
        comment: 'name by user'
    })
    lastname: string;
    @Column('varchar', {
        name: 'apellido',
        nullable: true,
        comment: 'lastname by user'
    })

    email: string;
    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'email by user'
    })

    direction: string;
    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'direction by user'
    })

    gender: boolean;
    @Column('boolean', {
        name: 'gender',
        nullable: true,
        comment: 'gender by user'
    })

    
    


    //--- fin columnas de datos---

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.name) {
            return
        }
        this.name = this.name.toLowerCase();
    }

    
}
