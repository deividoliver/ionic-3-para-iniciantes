import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public nome_usuario: string = "Mr. Bonner ts";
  public data: Date = new Date();

  public objeto_feed = {
    titulo: "Mr. Bonner",
    data: "Novembro, 25, 1993",
    descricao: "Esse dia foi ótimo!",
    qntd_likes: 12,
    qntd_comentarios: 4,
    time_comentario: "10h atrás"
  }

  public lista_filmes = new Array<any>();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movie_provider: MoovieProvider,
  ) {
  }

   ionViewDidLoad() {
    this.movie_provider.getFilmesMaisRecentes().subscribe(
      data => {
        const response = (data as any);
        const retorno_objeto = JSON.parse(response._body); 
        this.lista_filmes = retorno_objeto.results;

        console.log(retorno_objeto);
      }, error => {
        console.log(error);
      }
    );
  }

}
